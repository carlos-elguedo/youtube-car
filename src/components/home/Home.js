import React, { Component } from 'react';

/**Components */
import Header from './Header'
import SearchBar from './SearchBar'
import ResultPanel from './ResultPanel'

const config = require('../../config');

class Home extends Component {


  constructor(){
    super();
    this.state={
      result_title: 'Video results ok',
        search:'',
        searched: [],
        searched_total: []
    };
    this.getVideos = this.getVideos.bind(this);
    this.typing = this.typing.bind(this);
  }

  typing(eve){
    //console.log(eve.target.name + ": " +eve.target.value);
    const {value} = eve.target;

    this.setState({
        search: value
    });

    if (eve.keyCode === 13 && !eve.shiftKey) {
      eve.preventDefault();
      this.getVideos();
    }

    console.log(eve.keyCode + ": typing: " + value);

}

  getVideos(){
    //console.log('Va a buscar: ' + this.state.search );
    
    fetch(config.YOUTUBE_API + `search?key=${config.API_KEY_YOUTUBE}&part=snippet&q=${this.state.search}&type=video&maxResults=10`)
      .then(res =>res.json())
      .then(data =>{
        this.setState({
          searched: data.items,
          searched_total: data,
          result_title: `Results for ${this.state.search}`
          });
        console.log(this.state.searched);
      });
      
  }


  
  

  render() {
    return (
      <div className="App">
        <Header nav_title = " YouTube video player"/>
        <div className="container">
          <SearchBar search={this.getVideos} typing={this.typing}/>
          <ResultPanel result_title ={this.state.result_title} videos_to_view={this.state.searched} video_player={this.viewVideo}/>
        </div>
      </div>
      );
    }
  }
  
  export default Home;
  
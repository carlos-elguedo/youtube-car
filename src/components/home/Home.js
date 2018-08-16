import React, { Component } from 'react';

/**Components */
import Header from './Header'
import SearchBar from './SearchBar'
import ResultPanel from './ResultPanel'

/**Global configurations file*/
const config = require('../../config');

/**
 * Class Home
 * This component groups the elements of the page of search and visualization of videos
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class Home extends Component {

  /**
   * The constructor of the class defines several properties for the state object and manages it within the component:
   *  result_title: the text title of the search results
   *  search: the search text
   *  searched: videos finds
   */
  constructor(){
    super();
    this.state={
      result_title: 'Video results',
        search:'',
        searched: []
    };
    this.getVideos = this.getVideos.bind(this);
    this.typing = this.typing.bind(this);
  }

  /**
   * Event handler function for when the user types in the search bar
   * @param {*} eve event launched
   */
  typing(eve){
    //you get the written value
    const {value} = eve.target;

    //The state object is updated with the written text
    this.setState({
        search: value
    });

    //Condition for when the user press the enter key
    if (eve.keyCode === 13 && !eve.shiftKey) {
      eve.preventDefault();
      this.getVideos();
    }

}

  /**
  * Function  getVideos
  * this function is responsible for requesting the videos that will appear as results
  */
  getVideos(){
    //Verify that the text is not empty
    if(this.state.search!== ""){
      //The data is obtained
      fetch(config.YOUTUBE_API + `search?key=${config.API_KEY_YOUTUBE}&part=snippet&q=${this.state.search}&type=video&maxResults=12`)
      .then(res =>res.json())
      .then(data =>{
        this.setState({
          searched: data.items,
          result_title: `Results for ${this.state.search}`
          });
      });
    }else{
      //If the user clicks on search without writing anything
      this.setState({
        result_title: `write somethings`
      });
    }
      
  }


  
  
  /**
   * Construction of the main window of the app
   */
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
  
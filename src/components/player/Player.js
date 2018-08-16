import React, { Component } from 'react';

/**Components */
import Header from '../home/Header';
import PlayerPanel from './PlayerPanel'

const config = require('../../config');

const videoIdOfUrl = getParameterByName('videoId');

var ban = true;

class Player extends Component {
  
  

  constructor(){

    super();
    this.state={
        title: 'Player ',
        videoId: videoIdOfUrl,
        videoDetails: [],
        videosRecommended: []
    };
    this.getVideo = this.getVideo.bind(this);
    this.viewNewVideo = this.viewNewVideo.bind(this);
    this.getRecommendedVideos = this.getRecommendedVideos.bind(this);
    
        this.getVideo();
    

    
    
  }
  

  getVideo(){
    //console.log("Va a obtener el video: " + this.state.videoId);

    fetch(config.YOUTUBE_API + `videos?key=${config.API_KEY_YOUTUBE}&part=snippet,statistics&id=${this.state.videoId}&type=video`)
      .then(res =>res.json())
      .then(data =>{
        this.setState({
          videoDetails: data.items
          });
      });

    this.state.videoDetails.map((video, i) => {
      this.setState({
        title: ' Player: ' + video.snippet.title,
      });
    });

    this.getRecommendedVideos();
  }

  getRecommendedVideos(){
    
    fetch(config.YOUTUBE_API + `search?key=${config.API_KEY_YOUTUBE}&part=snippet&relatedToVideoId=${this.state.videoId}&type=video&maxResults=10`)
      .then(res =>res.json())
      .then(data =>{
        this.setState({
          videosRecommended: data.items
          });
        console.log("Recomendado: " + this.state.videosRecommended);
      });

    //console.log("Recomendado: " + this.state.videosRecommended);
    
  }


  viewNewVideo(eve){
    this.setState({
      videoId: eve
    });
    this.getVideo();

  }



  render() {
    
    return (
      <div className="App">
        <Header nav_title = {this.state.title}/>
        <div className="container">
          <PlayerPanel video_to_play={this.state.videoDetails} recommended_videos={this.state.videosRecommended} newVideo = {this.viewNewVideo}/>
        </div>
      </div>
      );
    }

    
  }
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(document.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
  
  export default Player;
  
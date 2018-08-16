import React, { Component } from 'react';

/** Components */
import Header from '../home/Header';
import PlayerPanel from './PlayerPanel'

/** Global configurations file*/
const config = require('../../config');

/**  Url of the video to be displayed*/
const videoIdOfUrl = getParameterByName('videoId');

/**
 * Class Player
 * This component contains all the elements for the video playback page
 * @author Carlos Elguedo
 * @version 0.0.1
 * 
 */
class Player extends Component {
  
  /**
   * Constituent of the component, here are defined in the object state, the following attributes
   * title: Title of the bar
   * videoId: id of the video to be displayed
   * videoDetails: Details of the video to be displayed
   * videosRecommended: Recommended videos to the video that is being viewed
   */
  constructor(){
    super();
    this.state={
        title: ' Player ',
        videoId: videoIdOfUrl,
        videoDetails: [],
        videosRecommended: []
    };
    this.getVideo = this.getVideo.bind(this);
    this.viewNewVideo = this.viewNewVideo.bind(this);
    this.getRecommendedVideos = this.getRecommendedVideos.bind(this);
    
    this.getVideo();
  }
  

  /**
   * Function getVideo
   * This function is to bring the data of the video to be visualized and to store the data in
   * the state variables of the component respectively
   */
  getVideo(){

    fetch(config.YOUTUBE_API + `videos?key=${config.API_KEY_YOUTUBE}&part=snippet,statistics&id=${this.state.videoId}&type=video`)
      .then(res =>res.json())
      .then(data =>{
        this.setState({
          videoDetails: data.items
          });
      });

    //This method is invoked to obtain the recommended videos
    this.getRecommendedVideos();
  }

  /**
   * Function getRecommendedVideos
   * Function In charge of obtaining the videos related to the video that is being viewed
   */
  getRecommendedVideos(){
    
    fetch(config.YOUTUBE_API + `search?key=${config.API_KEY_YOUTUBE}&part=snippet&relatedToVideoId=${this.state.videoId}&type=video&maxResults=12`)
      .then(res =>res.json())
      .then(data =>{
        this.setState({
          videosRecommended: data.items
          });
      });
    
  }


  /**
   * Function viewNewVideo
   * Function responsible for changing the state object to view a new video
   * @param {*} eve indicates the id of the new video to be displayed
   */
  viewNewVideo(eve){
    this.setState({
      videoId: eve
    });
    this.getVideo();
  }



  /**
   * Rendering components
   */
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

/**
 * Function getParameterByName
 * Function of utility to obtain data from the url
 * @param {*} name parameter get to get
 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(document.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
  
export default Player;
  
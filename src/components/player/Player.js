import React, { Component } from 'react';

/** Components */
import Header from '../home/Header';
import PlayerPanel from './PlayerPanel'

/** Archivo de configuraciones globales*/
const config = require('../../config');

/**  Url del video a visualizar*/
const videoIdOfUrl = getParameterByName('videoId');

/**
 * Class Player
 * Este componente contiene a todos los elementos para la pagina de reproduccion de video
 * @author Carlos Elguedo
 * @version 0.0.1
 * 
 */
class Player extends Component {
  
  /**
   * Constuctor del componente, aqui se definen en el objeto state, los siguientes atributos
   * title: Titulo de la barra
   * videoId: id del video a visualizar
   * videoDetails: Detalles del video a visualizar
   * videosRecommended: Videos recomendados al video que se esta visualizando
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
   * Funcion getVideo
   * Esta funcion es para traer los datos del video a visualizar y almecenar los datos en
   * las variables state del componente respectivamente
   */
  getVideo(){

    fetch(config.YOUTUBE_API + `videos?key=${config.API_KEY_YOUTUBE}&part=snippet,statistics&id=${this.state.videoId}&type=video`)
      .then(res =>res.json())
      .then(data =>{
        this.setState({
          videoDetails: data.items
          });
      });

    //Se invoca este metodo para obtener los videos recomendados
    this.getRecommendedVideos();
  }

  /**
   * Funcion getRecommendedVideos
   * Funcion encargada de obtener los videos relacionados al video que se esta visualizando
   */
  getRecommendedVideos(){
    
    fetch(config.YOUTUBE_API + `search?key=${config.API_KEY_YOUTUBE}&part=snippet&relatedToVideoId=${this.state.videoId}&type=video&maxResults=10`)
      .then(res =>res.json())
      .then(data =>{
        this.setState({
          videosRecommended: data.items
          });
      });
    
  }


  /**
   * Funcion viewNewVideo
   * Funcion encargada de cambiar el objeto state para visualizar un nuevo video
   * @param {*} eve indica el id del nuevo video a visualizar 
   */
  viewNewVideo(eve){
    this.setState({
      videoId: eve
    });
    this.getVideo();
  }



  /**
   * Renderizacion de los componentes
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
 * Funcion getParameterByName
 * Funcion de utilidad para obtener datos de la url
 * @param {*} name parametro get a obtener 
 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(document.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
  
export default Player;
  
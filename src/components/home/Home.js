import React, { Component } from 'react';

/**Components */
import Header from './Header'
import SearchBar from './SearchBar'
import ResultPanel from './ResultPanel'

/**Global configurations file*/
const config = require('../../config');

/**
 * Class Home
 * Este componente agrupara los elementos de la página de busqueda y visualizacion de videos
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class Home extends Component {

  /**
   * El constructor de la clase define varias propiedades para el objeto state y gestionarla dentro del componente:
   *  result_title: el texto titulo de los resultados de busqueda
   *  search: el texto buscado
   *  searched: videos encontrados
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
   * Funcion manejadora de evento para cuando el usuario escriba en la barra de busqueda
   * @param {*} eve evento lanzado
   */
  typing(eve){
    //se obtiene el valor escrito
    const {value} = eve.target;

    //Se actualiza el objeto state con el texto escrito
    this.setState({
        search: value
    });

    //Condicion para cuando el usuario presione la tecla enter
    if (eve.keyCode === 13 && !eve.shiftKey) {
      eve.preventDefault();
      this.getVideos();
    }

}

  /**
  * Funcion getVideos
  * esta funcion es la encargada de pedir los videos que apareceran como resultados
  */
  getVideos(){
    //Se verifica que el texto no este vacio
    if(this.state.search!== ""){
      //Se obtienen los datos
      fetch(config.YOUTUBE_API + `search?key=${config.API_KEY_YOUTUBE}&part=snippet&q=${this.state.search}&type=video&maxResults=10`)
      .then(res =>res.json())
      .then(data =>{
        this.setState({
          searched: data.items,
          result_title: `Results for ${this.state.search}`
          });
      });
    }else{
      //Si el usuario presiono en buscar sin escribir nada
      this.setState({
        result_title: `write somethings`
      });
    }
      
  }//Fin de la funcion getVideos


  
  
  /**
   * Construccion de la ventana principal de la app
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
  
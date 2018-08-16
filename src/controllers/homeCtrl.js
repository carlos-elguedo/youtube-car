const homeCtrl = {}

/**Archivo de configuraciones globales*/
const config = require('../config');

homeCtrl.getVideos = (text) => {
    var ret = [];
    fetch(config.YOUTUBE_API + `search?key=${config.API_KEY_YOUTUBE}&part=snippet&q=${text}&type=video&maxResults=10`)
      .then(res =>res.json())
      .then(data =>{
        return data.items
      });

      
}


module.exports = homeCtrl;
import React, {Component} from 'react';

var url = "https://www.youtube.com/embed/";

/**
 * Class VideoPlayer
 * Class responsible for showing the embedded player and the details of the video to be displayed
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class VideoPlayer extends Component{
    
    //The component renders the embedded player obtaining the data of the current video received as a parameter
    //And the details of said video
    render(){

        const data = this.props.details.map((video, i) => {
            
            return(
                <div key={i}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={url + video.id + "?rel=0"} allowFullScreen title={video.snippet.title}></iframe>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{video.snippet.title}</h4>
                            <h6 className="card-subtitle mb-2">{video.snippet.channelTitle}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">{video.statistics.viewCount} views</h6>
                            <p className="card-text">{video.snippet.description}</p>
                        </div>
                    </div>
                </div>
                
            )
        });

        return(
                <div>
                    {data}
                </div>
            );
    }
}
    
export default VideoPlayer;
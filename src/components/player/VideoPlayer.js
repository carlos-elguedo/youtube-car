import React, {Component} from 'react';

var url = "https://www.youtube.com/embed/";

class VideoPlayer extends Component{

    
    
    render(){

        const data = this.props.details.map((video, i) => {
            
            return(
                <div key={i}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={url + video.id + "?rel=0"} allowFullScreen></iframe>
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
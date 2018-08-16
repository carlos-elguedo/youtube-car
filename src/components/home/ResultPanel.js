import React, {Component} from 'react';
import { Link } from "react-router-dom";

/**
 * Class ResultPanel
 * Component Responsible for showing the videos resulting from the searches
 * It contains an iteration to show each resulting video
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class ResultPanel extends Component{
    
    render(){
        const video =  this.props.videos_to_view.map((video, i) => {
            
            return(
                <Link to={`/player?videoId=${video.id.videoId}`} target="_blank" className="VideoLink">
                <section className="result-video" key={i}>
                    <div className="container py-3">
                        <div className="card re-section">
                            <div className="row ">
                                <div className="col-md-4">
                                <img src={video.snippet.thumbnails.medium.url} className="w-100 hoverable" alt="img"/>`
                                </div>
                                <div className="col-md-8 px-3">
                                    <div className="card-block px-3">
                                        <h5 className="card-title">{video.snippet.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{video.snippet.channelTitle}</h6>
                                        <p className="card-text text-truncate"> {video.snippet.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </Link>
            )
          });

        return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-title re-card-header">
                            {this.props.result_title}
                        </div>
                        <div className="card-body">
                            {video}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultPanel;
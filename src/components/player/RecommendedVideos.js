import React, {Component} from 'react';

/**
 * Class RecommendedVideos
 * This component is for viewing the recommended videos
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class RecommendedVideos extends Component{

    /** Rendering of the elements
     * First iterates to get the recommended videos, which receive as parameters
     */
    render(){

        const video_recommended =  this.props.recommended_videos.map((video, i) => {
            return(
                <section className="result-video" key={i}>
                        <div className="card" onClick={(e) => this.props.newVideo(video.id.videoId, e)}>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={video.snippet.thumbnails.medium.url} className="w-100 hoverable" alt="img"/>`
                                </div>
                                <div className="col-md-6">
                                    <div className="card-block">
                                        <h6 className="card-title text-truncate">{video.snippet.title}</h6>
                                        <h6 className="card-subtitle mb-2 text-muted">{video.snippet.channelTitle}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            )
        });

        return(
            <div className="card-block px-3 re-card">
                <h5 className="card-title">Recommended videos</h5>
                {video_recommended}
            </div>
            );
    }
}
    
export default RecommendedVideos;
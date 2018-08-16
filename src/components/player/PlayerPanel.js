import React, {Component} from 'react';

/** Componentes */
import VideoPlayer from './VideoPlayer';
import RecommendedVideos from './RecommendedVideos';

/**
 * Class PlayerPanel
 * Component to group the elements of the video viewer
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class PlayerPanel extends Component{
    
    render(){
        return(
            <section>
                <div className="container py-3">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-8">
                                <VideoPlayer details = {this.props.video_to_play}/>
                            </div>
                            <div className="col-md-4 px-3">
                                <RecommendedVideos recommended_videos = {this.props.recommended_videos} newVideo = {this.props.newVideo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PlayerPanel;
import React,{Component} from 'react'
import VideoListItem from './video_list_item'
/*export default class VideoList extends Component{
    render(){
        const VideoItems=this.props.videos.map((video)=>{
            return(
                <VideoListItem key={video.etag} onVideoSelect={this.props.onVideoSelect} video={video}/>
            )
        })
        return(
            <ul className="col-md-4 list-group">
                {VideoItems}
            </ul>
        );
    }
}*/

const VideoList = ({videos,onVideoSelect})=>{
    const VideoItems=videos.map((video)=>{
        return(
            <VideoListItem key={video.etag} onVideoSelect={onVideoSelect} video={video}/>
        )
    })
    return(
        <ul className="col-md-4 list-group">
            {VideoItems}
        </ul>
    );
}

export default VideoList
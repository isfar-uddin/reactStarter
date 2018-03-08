import _ from 'lodash'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import VideoList from './components/video_list'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_details'
import YTSerach from 'youtube-api-search'


const API_KEY = 'AIzaSyC-_MEYKTizhBGvF1X1GXhcgrJrkPae9vY'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('surfboard')
    }

    videoSearch(term) {
        YTSerach({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        const videoSearch=_.debounce((term=>this.videoSearch(term)),300)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.querySelector('.container'));
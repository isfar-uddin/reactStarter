import React from 'react'
import ReactDOM from 'react-dom'
const API_KEY='AIzaSyC-_MEYKTizhBGvF1X1GXhcgrJrkPae9vY'
import SearchBar from './components/search_bar'
import YTSerach from 'youtube-api-search'

YTSerach({key:API_KEY,term:'nothing'},(data)=>{
    console.log(data)
})
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('.container'));
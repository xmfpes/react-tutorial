import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>Hello this is a Movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="http://t1.daumcdn.net/liveboard/movie/dc38196dc7824fa083dd5a2b9ebedd8c.JPG"/>
        )
    }
}

export default Movie;
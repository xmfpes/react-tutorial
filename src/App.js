import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "OldBoy",
  "KingsMan",
  "Star Wars"
]

const movieImages = [
  "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/01/09/the-matrix.jpg",
  "https://resizing.flixster.com/Mq0_LntBHHLskoj122sGEFh-P2Y=/206x305/v1.bTsxMTE3NjY0NjtqOzE3NTQ0OzEyMDA7MTQwMDsyMTAw",
  "http://t1.daumcdn.net/liveboard/movie/dc38196dc7824fa083dd5a2b9ebedd8c.JPG",
  "https://lumiere-a.akamaihd.net/v1/images/lazada-starwars-1-1_741cd5d6.jpeg?region=0%2C0%2C1000%2C1000&width=320"
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import axios from 'axios';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';

export default class extends Component{
  constructor(){
    super();
    this.state = Object.assign({
                  artistQuery: '',
                  songQuery: ''
                  }, store.getState());

    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleArtistInput(artist){
    this.setState({artistQuery: artist});
  }

  handleSongInput(song){
    this.setState({songQuery: song});
  }

  handleSubmit(event){
    event.preventDefault();
    
    if (this.state.artistQuery && this.state.songQuery){
      fetchLyrics(this.state.artistQuery, this.state.songQuery);
    }
    
  }

  componentDidMount(){
    //subscribe to the store
    //call setState
    //this.unsuscribe
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    return (
      <Lyrics
          setArtist={this.handleArtistInput}
          setSong={this.handleSongInput}
          handleSubmit={this.handleSubmit}
          artistQuery = {this.state.artistQuery}
          songQuery = {this.state.songQuery}
          text={this.state.text}
      />
    )
  }
}

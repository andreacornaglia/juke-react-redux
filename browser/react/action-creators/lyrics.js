import {SET_LYRICS} from '../constants';
import axios from 'axios';
import store from '../store';

export const setLyrics = function(text){
  return {
    type: SET_LYRICS,
    lyric: text
  }
}

export const fetchLyrics = function(artist, song){
    axios.get(`/api/lyrics/${artist}/${song}`)
    .then(res => {
      store.dispatch(setLyrics(res.data.lyric))
    })
    .catch(console.error.bind(console));
}
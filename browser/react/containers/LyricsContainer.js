import React, {Component} from 'react';
import store from '../store';

export default class LyricsContainer extends Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  
  componentDidMount(){
    //subscribe to the store
    //call setState
    //this.unsuscribe
    const unsubscribe = store.subscribe(function(){
      this.setState(store.getState());
    });
  }
  
  componentWillUnmount(){
    this.unsubscribe();
  }
  
  render(){
    return(
      <h1>Random stuff</h1>
    );
  }
}
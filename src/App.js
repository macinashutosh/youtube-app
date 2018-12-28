import React, { Component } from 'react';
import PhotoGallery from './components/PhotoGallery';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      isLoaded:false,
      allBreeds: []
    }
  }
  render (){  
    return <div className='app'> 
      <PhotoGallery />
    </div> 
  } 
}

export default App;

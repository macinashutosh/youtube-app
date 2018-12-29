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
      <ul>
          <li><PhotoGallery positionX = {0} positionY= {0} width={200} height={200} position="relative" /></li>
          <li><PhotoGallery positionX = {0} positionY= {0} width={200} height={200} position="relative" /></li>
          <li><PhotoGallery positionX = {0} positionY= {0} width={200} height={200} position="relative" /></li>
      </ul>
      <ul>
          <li><PhotoGallery positionX = {0} positionY= {0} width={200} height={200} position="relative" /></li>
          <li><PhotoGallery positionX = {0} positionY= {0} width={200} height={200} position="relative" /></li>
          <li><PhotoGallery positionX = {0} positionY= {0} width={200} height={200} position="relative" /></li>
      </ul>
      <ul>
          <li><PhotoGallery positionX = {0} positionY= {0} width={200} height={200} position="relative" /></li>
          <li><PhotoGallery positionX = {0} positionY= {0} width={200} height={200} position="relative" /></li>
          <li><PhotoGallery positionX = {0} positionY= {0} width={200} height={200} position="relative" /></li>
      </ul>
      
    </div> 
  } 
}

export default App;

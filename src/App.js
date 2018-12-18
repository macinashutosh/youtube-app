import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      isLoaded:false,
      allBreeds: []
    };
    fetch("https://dog.ceo/api/breeds/list/all").then(res => res.json()).then(
      (result) => {
        this.setState({
          isLoaded: true,
          allBreeds: result
        });
      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    );
   
  }
  componentDidUpdate(){
    console.log(this.state.allBreeds);
  }
  render (){  
    return <div className='app'> 
      <SearchBar />
    </div> 
  } 
}

export default App;

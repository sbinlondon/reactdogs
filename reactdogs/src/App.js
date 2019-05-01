import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './App.css';
import Chooser from './Chooser';
import Header from './Header.js';
import DogMedia from './DogMedia.js';
import Button from '@material-ui/core/Button';

class App extends Component {

  state = {
    currentBreed: 'Labrador',
    isLoaded: false,
    error: null,
    img: null
  }

  restart = event => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	}
  render() {
    return (
      <div className="App"
      style={{
      position: 'absolute', 
      left: '50%', 
      transform: 'translate(-50%)'
      }}
  >
        <Header />
          <Chooser 
            currentBreed = {this.state.currentBreed} />
          <DogMedia
            isLoaded = {this.state.isLoaded}
            error = {this.state.error}
            img = {this.state.img}/>
          <Button className="Button" variant="contained" color="primary" onClick={this.restart}>Refresh doggo</Button></div>
    );
  }
}
export default App;

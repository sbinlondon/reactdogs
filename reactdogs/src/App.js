import React, { Component } from 'react';
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
  
  updateDoggo = currentBreed => {
    return this.setState({currentBreed});
  };

  restart = event => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	}
  render() {
    console.log('app render', this.state.currentBreed)
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
            currentBreed = {this.state.currentBreed}
            updateDoggo = {this.updateDoggo} />
          <DogMedia
            isLoaded = {this.state.isLoaded}
            error = {this.state.error}
            img = {this.state.img}
            currentBreed = {this.state.currentBreed}/>
          <Button className="Button" variant="contained" color="primary" onClick={this.restart}>Refresh doggo</Button></div>
    );
  }
}
export default App;

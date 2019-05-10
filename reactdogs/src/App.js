import React, { Component } from 'react';
import './App.css';
import Chooser from './Chooser';
import Header from './Header.js';
import DogMedia from './DogMedia.js';
import Button from '@material-ui/core/Button';
import Utils from './Utils/Utils';

class App extends Component {
  state = {
    currentBreed: 'Labrador',
    isLoaded: false,
    error: null,
    img: null
  }

  componentWillMount() {
    this.getDoggo(this.state.currentBreed)
  }

  callUtils = breed => {
    Utils.callDogApi(breed)
      .then(
        (result) => {
          setTimeout(() => {
            this.setState({
              isLoaded: true,
              img: result.urls.regular
            })
          }, 500)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  };

  getDoggo = currentBreed => {
    this.setState({currentBreed});
    this.setState({isLoaded: false});
    this.callUtils(currentBreed)
  }

  refresh = () => {
		// eslint-disable-next-line no-restricted-globals
		this.setState({isLoaded: false});
    this.callUtils(this.state.currentBreed)
  }

  updateDoggo = currentBreed => {
    this.setState({currentBreed});
    this.getDoggo(currentBreed)
  };

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
          currentBreed = {this.state.currentBreed}
          updateDoggo = {this.updateDoggo} 
        />
        <DogMedia
          isLoaded = {this.state.isLoaded}
          error = {this.state.error}
          img = {this.state.img}
          currentBreed = {this.state.currentBreed}/>
        <Button 
          className="Button" 
          variant="contained"
          color="primary" 
          onClick={this.refresh}
        >
          Refresh doggo
        </Button>
      </div>
    );
  }
}
export default App;

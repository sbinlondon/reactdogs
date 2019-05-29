import React, { Component } from 'react';
import './App.css';
import Chooser from './Chooser';
import Header from './Header.js';
import DogMedia from './DogMedia.js';
import Button from '@material-ui/core/Button';
import Utils from './utils/Utils';
import Store from './stores/Store';

class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    img: null
  }

  componentWillMount() {
    this.getDoggo(Store.currentBreed)
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
    this.callUtils(Store.currentBreed)
    console.log(`Current breed is ${Store.currentBreed}`)
  }

  updateDoggo = currentBreed => {
    this.setState({currentBreed});
    this.getDoggo(currentBreed);
    Store.currentBreed = currentBreed;
    console.log(`Current breed is ${Store.currentBreed}`)
    this.changeBgColor();
  };

  changeBgColor = () => {
      document.getElementsByTagName('body')[0].style.background = Store.currentBgColor1
    // document.body.style = `background: linear-gradient(
    //   to bottom,
    //   ${Store.currentBgColor1},
    //   ${Store.currentBgColor1} 50%,
    //   ${Store.currentBgColor2} 50%,
    //   ${Store.currentBgColor2}
    // );`
  }

  render() {
    return (
      <div className="App"
        style={{
          position: 'absolute', 
          left: '50%', 
          transform: 'translate(-50%)',
        }}
      >
        <Header />
        <Chooser 
          currentBreed = {Store.currentBreed}
          updateDoggo = {this.updateDoggo} 
        />
        <DogMedia
          isLoaded = {this.state.isLoaded}
          error = {this.state.error}
          img = {this.state.img}
          currentBreed = {Store.currentBreed}/>
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

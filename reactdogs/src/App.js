import React, { Component } from 'react';
import './App.css';
import Chooser from './Chooser';
import Header from './Header.js';
import DogMedia from './DogMedia.js';
import Button from '@material-ui/core/Button';
import Utils from './Utils';

class App extends Component {

  state = {
    currentBreed: 'Labrador',
    isLoaded: false,
    error: null,
    img: null
  }

  componentWillMount() {
    this.callUtils(this.state.currentBreed)
      }
  
  updateDoggo = currentBreed => {
    
    this.setState({currentBreed});
    this.callUtils(currentBreed)
  };

  callUtils = currentBreed => {
    this.setState({currentBreed});
    this.setState({isLoaded: false});
    Utils.callDogApi(currentBreed)
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

  refresh = event => {
		// eslint-disable-next-line no-restricted-globals
		this.setState({isLoaded: false});
    Utils.callDogApi(this.state.currentBreed)
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
          <Button className="Button" variant="contained" color="primary" onClick={this.refresh}>Refresh doggo</Button></div>
    );
  }
}
export default App;

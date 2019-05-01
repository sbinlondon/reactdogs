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

  componentWillMount() {
    console.log('fetching')
        fetch(`https://cors-anywhere.herokuapp.com/https://api.unsplash.com/photos/random?query=${this.state.currentBreed}&client_id=ce282d18193c36686e67c4f7b687af7c36352e97024cdbfcc8ff27e1b87bce27`)
        .then(result => result.json())
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
  
  updateDoggo = currentBreed => {
    this.setState({currentBreed});
    this.setState({isLoaded: false});
    fetch(`https://cors-anywhere.herokuapp.com/https://api.unsplash.com/photos/random?query=${currentBreed}&client_id=ce282d18193c36686e67c4f7b687af7c36352e97024cdbfcc8ff27e1b87bce27`)
        .then(result => result.json())
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

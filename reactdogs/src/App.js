import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './App.css';
import Chooser from './Chooser';
import Header from './Header.js';
import CardMedia from './CardMedia.js';
import Button from '@material-ui/core/Button';

class App extends Component {
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
        <Paper className="Paper">
          <Chooser />
          <CardMedia/>
          <Button className="Button" variant="contained" color="primary" onClick={this.restart}>Refresh shibe</Button>
        </Paper>
</div>
    );
  }
}
export default App;

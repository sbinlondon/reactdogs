import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './App.css';
import Chooser from './Chooser';
import Header from './Header.js';
import MediaCard from './MediaCard.js';

class App extends Component {
  
  render() {
    return (
      <div className="App"
          style={{
          position: 'absolute', 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -50%)'
          }}
      >
        <Header />
        <Paper>
          <Chooser />
          <MediaCard />
        </Paper>
</div>
    );
  }
}
export default App;

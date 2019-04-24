import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './App.css';
import Chooser from './Chooser';
import Header from './Header.js';
import MediaCard from './MediaCard.js';

class App extends Component {
  
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <p> there will be merge problems! </p>

        <footer>
          things in here
        </footer>
      </div>
=======
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
>>>>>>> 126f628c7f1dd121325fe0583e63788b5c813b68
    );
  }
}
export default App;

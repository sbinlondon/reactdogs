import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class CardMedia extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		error: null,
		isLoaded: false,
		img: null
	  };
	}

	restart = event => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	}
  
	componentDidMount() {
	  fetch("https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1")
	  .then(result => result.json())
	  .then(
		(result) => {
		  setTimeout(() => {
			this.setState({
			  isLoaded: true,
			  img: result
			})
		  }, 3000)
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
	  const { error, isLoaded, img } = this.state;
	  if (error) {
		return (
		<div>
			<p>
			  Error has occurred :(
			</p>
		</div>
		)
	  } else if (!isLoaded) {
		return (
		  <div>
			  <p>
				Loading
			  </p>
		  </div>
		)
	  } else {
		return (
		  <div>
			<img src={img} alt="Shibe" />
			<Button variant="contained" color="primary" onClick={this.restart}>Refresh shibe</Button>
		  </div>
		);
	  }
	}
  }
  
  export default CardMedia;
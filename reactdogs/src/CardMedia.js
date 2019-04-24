import React, { Component } from 'react';

class CardMedia extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		error: null,
		isLoaded: false,
		img: null
	  };
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
		  }, 1000)
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
			<img src={img} alt="Shibe"/>
		  </div>
		);
	  }
	}
  }
  
  export default CardMedia;
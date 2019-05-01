import React from 'react';

export class DogMedia extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		error: null,
		isLoaded: false,
		img: null
	  };
	}
  componentDidMount() {
        fetch("https://cors-anywhere.herokuapp.com/https://api.unsplash.com/photos/random?query=labrador&client_id=ce282d18193c36686e67c4f7b687af7c36352e97024cdbfcc8ff27e1b87bce27")
        .then(result => result.json())
        .then(
          (result) => {
            setTimeout(() => {
              this.setState({
                isLoaded: true,
                img: result.urls.regular
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
                An error has occurred :(
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
              <img src={img} alt="Doggo"/>
            </div>
          );
        }
      }
    }
    
    export default DogMedia;
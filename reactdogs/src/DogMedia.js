import React from 'react';

export class DogMedia extends React.Component {
  // state = {
  //     error: this.props.error,
  //     isLoaded: this.props.isLoaded,
  //     img: this.props.img,
  //     currentBreed: this.props.currentBreed
  // };
    
  render() {
    // const { error, isLoaded, img } = this.state;
    if (this.props.error) {
      return (
      <div>
        <p>
          An error has occurred :(
        </p>
      </div>
      )
    } else if (!this.props.isLoaded) {
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
          <img src={this.props.img} alt="Doggo"/>
        </div>
      );
    }
  }
}
    
export default DogMedia;
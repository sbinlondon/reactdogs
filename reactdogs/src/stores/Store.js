import { decorate, observable, action } from 'mobx';

class Store {
  currentBreed = 'Labrador';
  currentBgColor1 = '#add8e6';
  currentBgColor2 = '#99cfe0';
  changeBgColor = () => {
    document.body.style = `background: linear-gradient(
      to bottom,
      ${this.currentBgColor1},
      ${this.currentBgColor1} 50%,
      ${this.currentBgColor2} 50%,
      ${this.currentBgColor2}
    );`
  }
}

decorate(Store, {
  currentBreed: observable,
  currentBgColor1: observable,
  currentBgColor2: observable,
  changeBgColor: action
});

export default new Store();

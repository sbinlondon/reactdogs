import { decorate, observable, action } from 'mobx';

class Store {
  currentBreed = 'Labrador';
}

decorate(Store, {
  currentBreed: observable
});

export default new Store();

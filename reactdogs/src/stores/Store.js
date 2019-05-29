import { decorate, observable, action } from 'mobx';

class Store {
  test = 'default breed';

  test2 = () => {
    console.log(`selected breed is ${this.test}`)
  }
}

decorate(Store, {
  test: observable,
  test2: action,
});

export default new Store();

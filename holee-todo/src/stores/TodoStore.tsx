import { action, makeObservable, observable } from 'mobx';

class TodoStore {
  count: number = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increase: action,
      decrease: action,
    });
  }

  increase = () => {
    this.count++;
  };
  decrease = () => {
    this.count--;
  };
}

export default TodoStore;

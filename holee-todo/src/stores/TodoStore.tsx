import { action, makeObservable, observable } from 'mobx';
import { ITodoContext } from '../interface';

class TodoStore {
  todoList: ITodoContext[] = [];
  increaseId: number = 0;

  constructor() {
    makeObservable(this, {
      todoList: observable,
      addContent: action,
      removeContent: action,
    });
  }

  addContent = (content: string) => {
    this.todoList.push({ id: this.increaseId, content: content, checked: false });
    this.increaseId += 1;
  };

  removeContent = (id: number) => {
    const targetId = this.todoList.findIndex((v) => v.id === id);
    if (targetId !== -1) {
      this.todoList.splice(targetId, 1);
    }
  };
}

export default TodoStore;

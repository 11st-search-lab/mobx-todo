import { observable } from "mobx";
import { ITodoData } from "../types/TodoType";

interface ITodo {
  todoData: ITodoData[];
  currentId: number;
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
}

const TodoStore = observable<ITodo>({
  todoData: [],
  currentId: 0,

  addTodo(content) {
    this.todoData.push({ todoId: this.currentId, content, completed: false });
    this.currentId++;
  },

  removeTodo(id) {
    this.todoData.filter(data => data.todoId !== id);
  },
});

export default TodoStore;

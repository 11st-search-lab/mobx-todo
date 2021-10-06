import { useObserver } from "mobx-react";
import TodoItem from "./TodoItem";
import TodoStore from "../../stores/TodoStore";

const TodoList = () => {
  const { todoData } = TodoStore;

  return useObserver(() => (
    <ul>
      {todoData.map(todo => (
        <TodoItem text={todo.content} key={todo.todoId}></TodoItem>
      ))}
    </ul>
  ));
};

export default TodoList;

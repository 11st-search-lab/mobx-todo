import { observer } from "mobx-react";
import TodoItem from "./TodoItem";
import TodoStore from "../../stores/TodoStore";

const TodoList = () => {
  const { todoData } = TodoStore;

  return (
    <ul>
      {todoData.map(todo => (
        <TodoItem
          id={todo.todoId}
          text={todo.content}
          checked={todo.completed}
          key={todo.todoId}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default observer(TodoList);

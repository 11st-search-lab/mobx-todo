import TodoStore from "../../stores/TodoStore";
import { useState } from "react";

interface ITodo {
  text: string;
  checked: boolean;
  id: number;
}

const TodoItem = ({ text, checked, id }: ITodo) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    if (target.className === "todo-delete-btn") handleDeleteTodo();
    if (target.id === "todo-text") handleCheckedTodo();
  };

  const handleCheckedTodo = () => setIsChecked(!isChecked);
  const handleDeleteTodo = () => TodoStore.removeTodo(id);

  const getClassName = () => (isChecked ? "checked-todo" : "unchecked-todo");

  return (
    <div className="todo-container" onClick={handleClick}>
      <li key={`li-${id}`}>
        <div id="todo-text" className={getClassName()}>
          {text}
        </div>
      </li>
      <span className="todo-delete-btn">❌</span>
    </div>
  );
};

export default TodoItem;

import TodoStore from "../../stores/TodoStore";
import { useState } from "react";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = () => TodoStore.addTodo(todoInput);
  const handleTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={todoInput}
        onChange={handleTodoInput}
      />
      <button type="submit" onClick={handleAddTodo}>
        추가
      </button>
    </>
  );
};

export default TodoInput;

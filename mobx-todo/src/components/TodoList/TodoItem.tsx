interface ITodo {
  text: string;
}

const TodoItem = ({ text }: ITodo) => {
  return <li>{text}</li>;
};

export default TodoItem;

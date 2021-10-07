import React from 'react';
import { observer } from 'mobx-react-lite';
import { ITodoContext } from '../../interface';

function TodoItem({ id, content, checked }: ITodoContext) {
  return (
    <li className="todo-item" data-id={id}>
      <button className={checked ? 'todo-item-content todo-item-checked' : 'todo-item-content'}>{content}</button>
      <button className="todo-item-remove-button">❌</button>
    </li>
  );
}

export default observer(TodoItem);

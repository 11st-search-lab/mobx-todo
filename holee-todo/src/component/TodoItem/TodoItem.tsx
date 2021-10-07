import React from 'react';
import { observer } from 'mobx-react-lite';
import { ITodoContext } from '../../interface';

function TodoItem({ id, content, checked, removeButtonHandler }: any) {
  return (
    <li className="todo-item">
      <button className={checked ? 'todo-item-content todo-item-checked' : 'todo-item-content'}>{content}</button>
      <button className="todo-item-remove-button" onClick={(e) => removeButtonHandler(e)} data-id={id}>
        ❌
      </button>
    </li>
  );
}

export default observer(TodoItem);

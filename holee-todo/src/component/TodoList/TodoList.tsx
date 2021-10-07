import React from 'react';
import { observer } from 'mobx-react-lite';

import { ItodoStore } from '../../interface';
import TodoItem from '../TodoItem';

function TodoList({ store }: { store: ItodoStore }) {
  const todoStore: ItodoStore = store;
  const { todoList, removeContent } = todoStore;

  const removeButtonHandler = (e: React.MouseEvent) => {
    const removeButton = e.currentTarget as HTMLButtonElement;
    if (removeButton.dataset.id) {
      removeContent(Number(removeButton.dataset.id));
    }
  };

  return (
    <ul className="todo-list">
      {todoList.map(({ id, content, checked }) => (
        <TodoItem key={id} id={id} content={content} checked={checked} removeButtonHandler={removeButtonHandler} />
      ))}
    </ul>
  );
}

export default observer(TodoList);

import React from 'react';
import { observer } from 'mobx-react-lite';

import { ItodoStore } from '../../interface';
import TodoItem from '../TodoItem';

function TodoList({ store }: { store: ItodoStore }) {
  const todoStore: ItodoStore = store;
  const { todoList } = todoStore;

  return (
    <ul className="todo-list">
      {todoList.map(({ id, content, checked }) => (
        <TodoItem key={id} id={id} content={content} checked={checked} />
      ))}
    </ul>
  );
}

export default observer(TodoList);

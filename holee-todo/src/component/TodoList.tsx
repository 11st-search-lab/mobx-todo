import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import StoreContext from '../contexts/stores';
import { ItodoStore } from '../interface';
import TodoItem from './TodoItem';

function TodoList() {
  const todoStore: ItodoStore = useContext(StoreContext) as ItodoStore;
  const { todoList } = todoStore;

  return (
    <section>
      {todoList.map(({ id, content, checked }) => (
        <TodoItem key={id} id={id} content={content} checked={checked} />
      ))}
    </section>
  );
}

export default observer(TodoList);

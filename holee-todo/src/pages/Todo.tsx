import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import StoreContext from '../contexts/stores';
import { ItodoStore } from '../interface';
import TodoTitle from '../component/Title';
import TodoForm from '../component/TodoForm';
import TodoList from '../component/TodoList';

function Todo() {
  const todoStore: ItodoStore = useContext(StoreContext) as ItodoStore;

  return (
    <section className="todo">
      <TodoTitle text="TodoList" />
      <TodoForm store={todoStore} />
      <TodoList store={todoStore} />
    </section>
  );
}

export default observer(Todo);

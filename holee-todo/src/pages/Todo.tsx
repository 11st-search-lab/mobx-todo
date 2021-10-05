import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import StoreContext from '../contexts/stores';
import { ItodoStore } from '../interface';
import TodoForm from '../component/TodoForm';
import TodoList from '../component/TodoList';

function Todo() {
  const todoStore: ItodoStore = useContext(StoreContext) as ItodoStore;

  console.log(todoStore);
  return (
    <div style={{ padding: '50px' }}>
      <div style={{ marginBottom: '50px' }}>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default observer(Todo);

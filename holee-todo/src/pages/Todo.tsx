import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import StoreContext from '../contexts/stores';

interface Itodo {
  count: number;
  increase: () => {};
  decrease: () => {};
}

function Todo() {
  const todoStore: Itodo = useContext(StoreContext) as Itodo;

  console.log(todoStore);
  return (
    <div style={{ padding: '50px' }}>
      <div style={{ marginBottom: '50px' }}>
        <h1>Count (Class)</h1>
        <div>number: {todoStore.count}</div>
        <button onClick={() => todoStore.increase()}>plus</button>
        <button onClick={() => todoStore.decrease()}>minus</button>
      </div>
    </div>
  );
}

export default observer(Todo);

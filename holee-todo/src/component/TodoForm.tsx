import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';

import StoreContext from '../contexts/stores';
import { ItodoStore } from '../interface';

function TodoForm() {
  const [content, setContent] = useState('');
  const todoStore: ItodoStore = useContext(StoreContext) as ItodoStore;

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    todoStore.addContent(content);
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={onChangeHandler} value={content} placeholder="할 일을 입력하세요." />
      <button type="submit">등록</button>
    </form>
  );
}

export default observer(TodoForm);

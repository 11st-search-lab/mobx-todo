import React from 'react';
import { observer } from 'mobx-react-lite';
import { ITodoContext } from '../interface';

function TodoItem({ id, content, checked }: ITodoContext) {
  return (
    <div>
      {id} {content} {checked}
    </div>
  );
}

export default observer(TodoItem);

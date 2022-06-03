import React from 'react';
import { useDispatch } from 'react-redux';
import { change, toggle, remove } from '../../store/slices/todosSlice';
import classNames from 'classnames';
import { BsTrash } from 'react-icons/bs';

import Checkbox from '../ui/Checkbox';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const changeTodoHandler = (event) => {
    dispatch(change({ id: todo.id, text: event.target.value }));
  };

  const toggleTodoHandler = () => {
    dispatch(toggle(todo.id));
  };

  const removeTodoHandler = () => {
    dispatch(remove(todo.id));
  };

  return (
    <li className="mt-5 flex items-center">
      <Checkbox
        isChecked={todo.isCompleted}
        onChange={() => toggleTodoHandler()}
        onToggle={toggleTodoHandler}
      />
      <input
        className={classNames(
          'w-full form-input grow-1 mx-3 py-1 px-3 font-medium border-0 text-xl rounded-md  disabled:text-gray-400',
          { 'line-through': todo.isCompleted },
        )}
        disabled={todo.isCompleted}
        type="text"
        value={todo.text}
        onChange={(event) => changeTodoHandler(event)}
      />
      <button onClick={() => removeTodoHandler()}>
        <BsTrash
          className="text-gray-500 hover:text-red-600 transition-colors duration-300 ease-in-out"
          size={24}
        />
      </button>
    </li>
  );
}

export default TodoItem;

import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/slices/todosSlice';

function AddTodo() {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();

  const onAddTodo = (text) => {
    dispatch(add(text));
    setText('');
  };

  return (
    <>
      <h2 className="text-xl text-purple-600 font-bold sm:text-2xl">Добавить новую задачу</h2>
      <div className="flex items-center mt-6">
        <input
          className="form-input grow mr-3 py-2 px-4 text-md sm:text-lg sm:max-w-[500px] rounded-md placeholder:text-gray-400"
          type="text"
          placeholder="Введите текст..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          className="w-10 h-10 bg-purple-600 text-white text-2xl text-bold  rounded-full flex justify-center items-center"
          onClick={() => onAddTodo(text)}>
          +
        </button>
      </div>
    </>
  );
}

export default AddTodo;

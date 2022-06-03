import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import { add } from '../../store/slices/todosSlice';
import { MdAdd } from 'react-icons/md';

function CreateTodo() {
  const [text, setText] = React.useState('');
  const [isValidText, setIsValidText] = React.useState(false);
  const dispatch = useDispatch();

  const addTodoHandler = (text) => {
    if (text) {
      dispatch(add(text));
      setText('');
    } else {
      setIsValidText(true);
    }
  };

  return (
    <>
      <h2 className="text-xl text-purple-600 font-bold sm:text-2xl">Добавить новую задачу</h2>
      <div className="flex items-center mt-6">
        <CSSTransition
          in={isValidText}
          timeout={1000}
          classNames="todo-input"
          onEntered={() => setIsValidText(false)}>
          <input
            className="form-input grow mr-3 py-2 px-4 text-md sm:text-lg sm:max-w-[500px] rounded-md placeholder:text-gray-400"
            type="text"
            placeholder="Введите текст..."
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyPress={(event) => event.key === 'Enter' && addTodoHandler(text)}
          />
        </CSSTransition>
        <button
          className="w-10 h-10 bg-purple-600 text-white text-2xl text-bold  rounded-full flex justify-center items-center"
          onClick={() => addTodoHandler(text)}>
          <MdAdd size={24} />
        </button>
      </div>
    </>
  );
}

export default CreateTodo;

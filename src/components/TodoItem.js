import React from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../store/slices/todosSlice';

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();

  return (
    <li className="mt-5 flex items-center">
      <button className="mr-5">
        <svg
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 8.16669H25"
            stroke="#5E5E5E"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 12.8333V19.8333"
            stroke="#5E5E5E"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 12.8333V19.8333"
            stroke="#5E5E5E"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.25 8.16669L7.5 22.1667C7.5 22.7855 7.76339 23.379 8.23223 23.8166C8.70107 24.2542 9.33696 24.5 10 24.5H20C20.663 24.5 21.2989 24.2542 21.7678 23.8166C22.2366 23.379 22.5 22.7855 22.5 22.1667L23.75 8.16669"
            stroke="#5E5E5E"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.25 8.16667V4.66667C11.25 4.35725 11.3817 4.0605 11.6161 3.84171C11.8505 3.62292 12.1685 3.5 12.5 3.5H17.5C17.8315 3.5 18.1495 3.62292 18.3839 3.84171C18.6183 4.0605 18.75 4.35725 18.75 4.66667V8.16667"
            stroke="#5E5E5E"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <input
        className="form-checkbox mr-5 w-6 h-6 cursor-pointer text-blue-500 rounded-md"
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          console.log(completed);
          update({
            id,
            todo: {
              id,
              text,
              completed: !completed,
            },
          });
        }}
      />
      <input
        disabled={completed}
        className={
          completed
            ? 'line-through'
            : '' +
              ' form-input w-full py-1 px-3 font-medium border-0 text-xl rounded-md  disabled:text-gray-400'
        }
        type="text"
        value={text}
        onChange={(e) =>
          dispatch(
            update({
              id,
              todo: {
                id,
                text: e.target.value,
                completed,
              },
            }),
          )
        }
      />
    </li>
  );
}

export default TodoItem;

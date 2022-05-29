import React from 'react';

function AddTodo() {
  return (
    <>
      <h2 className="text-xl text-purple-600 font-bold sm:text-2xl">Добавить новую задачу</h2>

      <div className="flex items-center mt-6">
        <input
          className="form-input grow mr-3 py-2 px-4 text-md sm:text-lg sm:max-w-[500px] rounded-md placeholder:text-gray-400"
          type="text"
          placeholder="Введите текст..."
        />
        <button className="w-10 h-10 bg-purple-600 text-white text-2xl text-bold  rounded-full flex justify-center items-center">
          +
        </button>
      </div>
    </>
  );
}

export default AddTodo;

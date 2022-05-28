import React from 'react';

function App() {
  return (
    <>
      <header className="text-center">
        <h1 className="py-7 text-4xl after:text-gray-600 font-bold sm:text-5xl">Список задач</h1>
      </header>

      <main className="container mx-auto px-4 sm:px-0">
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

        <ul className="mt-12 w-full sm:w-[500px]">
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
              checked
              className="form-checkbox mr-5 w-6 h-6 cursor-pointer text-blue-500 rounded-md"
              type="checkbox"
            />
            <input
              disabled
              className="form-input w-full py-1 px-3 font-medium border-0 text-xl rounded-md line-through disabled:text-gray-400"
              type="text"
              value="Lorem, ipsum."
            />
          </li>
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
            />
            <input
              className="form-input w-full py-1 px-3 font-medium border-0 text-xl rounded-md"
              type="text"
              value="Lorem, ipsum dolor."
            />
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;

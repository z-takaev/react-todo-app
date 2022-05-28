import React from 'react';

function App() {
  return (
    <>
      <header className="text-center">
        <h1 className="py-7 text-6xl text-gray-600 font-bold">TaskDo</h1>
      </header>

      <main className="container mx-auto">
        <button className="flex items-center text-purple-600 text-2xl font-bold cursor-pointer before:content-['+'] before:w-8 before:h-8 before:mr-3 before:bg-purple-600 before:text-white before:text-base before:rounded-full before:inline-flex before:justify-center before:items-center">
          Add New Task
        </button>

        <input
          className="mt-8 w-[500px] py-2 px-4 text-lg"
          type="text"
          placeholder="Type text..."
        />

        <ul className="mt-12">
          <li className="flex items-center">
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
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 12.8333V19.8333"
                  stroke="#5E5E5E"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 12.8333V19.8333"
                  stroke="#5E5E5E"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.25 8.16669L7.5 22.1667C7.5 22.7855 7.76339 23.379 8.23223 23.8166C8.70107 24.2542 9.33696 24.5 10 24.5H20C20.663 24.5 21.2989 24.2542 21.7678 23.8166C22.2366 23.379 22.5 22.7855 22.5 22.1667L23.75 8.16669"
                  stroke="#5E5E5E"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.25 8.16667V4.66667C11.25 4.35725 11.3817 4.0605 11.6161 3.84171C11.8505 3.62292 12.1685 3.5 12.5 3.5H17.5C17.8315 3.5 18.1495 3.62292 18.3839 3.84171C18.6183 4.0605 18.75 4.35725 18.75 4.66667V8.16667"
                  stroke="#5E5E5E"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <input className="mr-5 w-6 h-6 cursor-pointer" type="checkbox" />
            <span className="font-medium text-2xl line-through">Lorem, ipsum.</span>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;

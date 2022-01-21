import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Select from "./Select/Select";
import moment from "moment";

export default function TodoForm({ todos, setTodos, setShowTask }) {
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);
  const [todoInput, setTodoInput] = useState({
    todo: "",
    description: "",
    type: "Task type",
  });

  const changeSelectedTypeHandler = (type) =>
    setTodoInput({ ...todoInput, type });
  const submitHandler = (event) => {
    event.preventDefault();

    if (todoInput.todo.trim() !== "") {
      if (todoInput.type === "Task type") {
        toast.error("Please enter your task type");
      } else {
        addTaskHandler();
      }
    } else {
      toast.error("Please enter todo");
    }
  };
  const addTaskHandler = () => {
    if (showDescriptionInput) {
      closeDescriptionInput();
    }
    const todo = {
      ...todoInput,
      id: Math.floor(Math.random() * 1000),
      time: moment(),
      isComplete: false,
    };

    setTodoInput({
      todo: "",
      description: "",
      type: todoInput.type,
    });

    setTodos([...todos, todo]);
  };
  const closeDescriptionInput = () => {
    setShowDescriptionInput(!showDescriptionInput);
    if (!showDescriptionInput === false) {
      setTodoInput({ ...todoInput, description: "" });
    }
  };

  useEffect(() => {
    // console.log(showDescriptionInput);
  }, [showDescriptionInput]);

  return (
    <section>
      <Toaster />
      <section className="bg-white border border-gray-300 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Todos</h2>
          <button
            onClick={submitHandler}
            type="submit"
            className={`flex items-center rounded-md z-20 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm ${
              todoInput.type === "Task type" || todoInput.todo.trim() === ""
                ? "bg-gray-300 pointer-events-auto cursor-not-allowed"
                : "hover:bg-indigo-700 bg-indigo-600"
            }`}
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New
          </button>
        </div>
        <form onSubmit={submitHandler} className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-2.5 text-gray-400 pointer-events-none "
            aria-hidden="true"
          >
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          <input
            className="focus:ring-indigo-600 focus:border-indigo-600 block w-full pl-10 h-10 pr-12 border sm:text-sm border-gray-200 rounded-md ring-1 ring-gray-200 shadow-sm outline-none"
            type="text"
            aria-label="Add new title"
            placeholder="Task title..."
            value={todoInput.todo}
            onChange={(e) =>
              setTodoInput({ ...todoInput, todo: e.target.value })
            }
          />
          <div className="md:w-1/5 w-full md:absolute md:right-0 md:top-0 mt-1 md:mt-0">
            <Select
              todoInput={todoInput}
              updateSelectedInputType={changeSelectedTypeHandler}
            />
          </div>
          <label className="flex items-center mt-4 pl-1 space-x-2">
            <input
              type="checkbox"
              className="accent-violet-500"
              checked={showDescriptionInput}
              onChange={closeDescriptionInput}
            />
            <span className="text-gray-500 text-sm">
              Add discription for this task.
            </span>
          </label>
          {showDescriptionInput && (
                <textarea
                  style={{ textAlign: "start", unicodeBidi: "plaintext" }}
                  className="resize-none mx-auto focus:border-indigo-600 focus:outline-none w-full text-base leading-6 text-gray-700 placeholder-gray-400 rounded-md py-4 pl-5 pr-10 shadow-sm border border-gray-200 z-10 ring-1 ring-gray-200 focus:ring-indigo-600 mt-3"
                  type="text"
                  aria-label="Add new description"
                  placeholder="Description..."
                  rows="4"
                  value={todoInput.description}
                  onChange={(e) =>
                    setTodoInput({ ...todoInput, description: e.target.value })
                  }
                />
          )}
        </form>
      </section>
    </section>
  );
}

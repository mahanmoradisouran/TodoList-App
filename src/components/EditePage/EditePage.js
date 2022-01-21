import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Select from "../Select/Select";
import { AiOutlineReload } from "react-icons/ai";

const EditePage = ({ todos, setTodos, showEdite, setShowEdite }) => {
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);
  const [todoInput, setTodoInput] = useState({ ...showEdite });

  const changeSelectedTypeHandler = (type) =>
    setTodoInput({ ...todoInput, type });
  const closeDescriptionInput = () => {
    setShowDescriptionInput(!showDescriptionInput);
    if (!showDescriptionInput === false) {
      setTodoInput({ ...todoInput, description: "" });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const Todos = [...todos];
    const index = Todos.findIndex((t) => t.id === showEdite.id);
    Todos[index] = todoInput;

    setTodos(Todos);

    setShowEdite(0);
  };

  useEffect(() => {
    // console.log(todoInput);
  }, [todoInput]);

  return (
    <div className="w-full h-full relative bg-gray-100">
      <Navbar onClick={setShowEdite} time={showEdite.time} />
      <div className="md:w-9/12 w-10/12 mx-auto mt-10 border border-gray-300 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 rounded-lg bg-white">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Edite todos</h2>
          <button
            onClick={submitHandler}
            type="submit"
            className={`flex items-center rounded-md z-20 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm 
              ${
                todoInput.type === "Task type" || todoInput.todo.trim() === ""
                  ? "pointer-events-auto cursor-not-allowed bg-gray-100"
                  : "hover:bg-indigo-700 bg-indigo-600"
              }
            `}
          >
            <AiOutlineReload className="mr-2" fontSize={18} />
            Change
          </button>
        </div>
        <form className="group relative">
          <input
            className="focus:ring-indigo-600 focus:border-indigo-600 block w-full pl-5 h-10 pr-12 border sm:text-sm border-gray-200 rounded-md ring-1 ring-gray-200 shadow-sm outline-none"
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
              updateSelectedInputType={changeSelectedTypeHandler}
              SelectedType={todoInput.type}
            />
          </div>
        </form>
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
      </div>
    </div>
  );
};

export default EditePage;

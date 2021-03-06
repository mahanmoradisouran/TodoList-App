import { BsCheck, BsX, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";

const TaskPage = ({ todos, setTodos, setShowTask, showTask, setShowEdite }) => {
  const findedTodo = todos.find((t) => t.id === showTask);

  const completeTodoHandler = () => {
    const index = todos.findIndex((t) => t.id === findedTodo.id);
    const updatedTodos = [...todos];
    updatedTodos[index].isComplete = !findedTodo.isComplete;

    setTodos(updatedTodos);
  };
  const showEditPage = () => {
    setShowTask(0);
    setShowEdite(findedTodo);
  };
  const delteTaskHandler = () => {
    setTodos(todos.filter((t) => t.id !== findedTodo.id));
    setShowTask(0);
  };

  return (
    <div className="w-full h-full relative">
      <Navbar onClick={setShowTask} time={findedTodo.time} />
      <div className="md:w-9/12 w-10/12 mx-auto py-10 text-gray-500">
        <h1 className="text-gray-900 font-bold md:text-3xl text-2xl">
          {findedTodo.todo}
        </h1>
        <div
          className="h-full relative my-5"
          style={{ textAlign: "start", unicodeBidi: "plaintext" }}
        >
          {findedTodo.description ? (
            <div className="text-2xl text-gray-800 break-all">{findedTodo.description}</div>
          ) : (
            <p className="text-gray-400 text-lg">
              No caption aded for this task.
            </p>
          )}
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="left-5 bottom-5 absolute">
          <button
            onClick={showEditPage}
            className="bg-blue-100 rounded-full p-3 text-sky-400 transition-all hover:bg-blue-200 hover:shadow-md"
          >
            <AiFillEdit size={20} />
          </button>
          <button
            onClick={delteTaskHandler}
            className="bg-red-100 rounded-full p-3 ml-1 text-rose-600 transition-all hover:bg-red-200 hover:shadow-md"
          >
            <BsFillTrashFill size={20} />
          </button>
        </div>
        <div className="right-5 bottom-5 absolute ">
          <button
            onClick={completeTodoHandler}
            className={`text-white rounded-full transition-all
            flex justify-center items-center pr-5 pl-2 hover:shadow-md 
          h-10 ${
            findedTodo.isComplete
              ? "bg-red-600 hover:bg-red-700"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
          >
            {findedTodo.isComplete ? <BsX size={28} /> : <BsCheck size={28} />}
            {findedTodo.isComplete && "Not "}completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;

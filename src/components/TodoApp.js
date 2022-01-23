import TodoForm from "./TodoFrom";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import TaskPage from "./TaskPage/TaskPage";
import EditePage from "./EditePage/EditePage";

export default function TodoApp0() {
  const [status, setStatus] = useState("All");

  const [todos, setTodos] = useState([]);

  const [filteredTodos, setFilteredTodos] = useState([]);
  // 0 => nothing show
  // Number => show todo by number (id)
  const [showTask, setShowTask] = useState(0);
  // nothing show
  // Number => show
  const [showEdite, setShowEdite] = useState(0);

  useEffect(() => {
    const filterTodos = (status) => {
      switch (status) {
        case "All":
          return setFilteredTodos(todos);
        case "Completed":
          return setFilteredTodos(todos.filter((t) => t.isComplete === true));
        case "Uncompleted":
          return setFilteredTodos(todos.filter((t) => t.isComplete === false));
        default:
          break;
      }
    };
    filterTodos(status);
  }, [todos, status, filteredTodos]);

  const renderContentHandler = () => {
    if (showTask === 0 && showEdite === 0) {
      return (
        <>
          <TodoForm
            todos={todos}
            setTodos={setTodos}
            setShowTask={setShowTask}
          />
          <TodoList
            todos={filteredTodos}
            setTodos={setTodos}
            setShowTask={setShowTask}
            setStatus={setStatus}
          />
        </>
      );
    } else if (showTask !== 0 && showEdite === 0) {
      return (
        <TaskPage
          todos={todos}
          setTodos={setTodos}
          setShowTask={setShowTask}
          showTask={showTask}
          setShowEdite={setShowEdite}
        />
      );
    } else if (showTask === 0 && showEdite !== 0) {
      return (
        <EditePage
          showEdite={showEdite}
          setShowEdite={setShowEdite}
          todos={todos}
          setTodos={setTodos}
        />
      );
    }
  };

  return (
    <div
      className={`${
        showTask || showEdite !== 0 ? "w-full h-full" : "w-10/12 pt-5"
      } ${showEdite !== 0 && "bg-white"}flex flex-col mx-auto `}
    >
      {renderContentHandler()}
    </div>
  );
}

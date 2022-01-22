import SortSelect from "./SortSelect/SortSelect";
import Todo from "./Todo/Todo";

const TodoList = ({ todos, setShowTask, setStatus }) => {
  return (
    <div className="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 mt-5 flex flex-col items-center bg-white rounded-md border border-gray-300">
      <div className="flex items-center justify-around w-full">
        <h2 className="text-left">Todo list</h2>
        <SortSelect setStatus={setStatus} />
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} setShowTask={setShowTask} />
      ))}
    </div>
  );
};

export default TodoList;

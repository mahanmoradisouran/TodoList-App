import SortSelect from "./SortSelect/SortSelect";
import Todo from "./Todo/Todo";

const TodoList = ({ todos, setShowTask, setStatus }) => {
  return (
    <div className="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 mt-5 flex flex-col items-center bg-white rounded-md border border-gray-300">
      <div className="flex md:flex-row flex-col items-center justify-around w-full">
        <h2 className="text-center md:w-2/12 text-gray-700">Todo list</h2>
        <div className="flex md:flex-row flex-col md:items-center md:justify-end md:w-10/12">
          Filter by status
          <SortSelect setStatus={setStatus} />
        </div>
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} setShowTask={setShowTask} />
      ))}
    </div>
  );
};

export default TodoList;

import Todo from "./Todo/Todo";

const TodoList = ({ todos, setShowTask }) => {

  return (
    <div className="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 mt-5 flex flex-col items-center">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} setShowTask={setShowTask} />
      ))}
    </div>
  );
};

export default TodoList;

import "./App.css";
import TodoApp from "./components/TodoApp";



const App = () => {
  return (
      <div className="bg-gray-100 w-full h-screen fixed overflow-auto">
        <TodoApp />
      </div>
  );
};

export default App;

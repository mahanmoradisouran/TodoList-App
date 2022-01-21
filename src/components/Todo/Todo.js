import Tooltip from "@mui/material/Tooltip";
import { AiOutlineArrowRight} from "react-icons/ai";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";

const type = [
  { name: "Task type", color: "#E5E7EB95" },
  { name: "Home", color: "#8B5CF695" },
  { name: "typeal", color: "#EC489995" },
  { name: "school", color: "#34D39995" },
  { name: "Work", color: "#F59E0B95" },
];
const them = createTheme({
  palette: {
    Home: {
      main: "#8B5CF695",
    },
    typeal: {
      main: "#EC489995",
    },
    school: {
      main: "#34D39995",
    },
    Work: {
      main: "#F59E0B95",
    },
  },
});

const Todo = ({ todo, setShowTask }) => {
  const findColor = type.find((t) => t.name === todo.type);

  return (
    <>
      <div
        onClick={() => setShowTask(todo.id)}
        className="bg-white rounded-lg border border-gray-300 py-4 md:px-6 px-4 w-full"
      >
        <div className="w-full flex items-center relative">
          <div className="absolute left-0 top-0 h-full w-1/12 flex items-center">
            <div
              className="w-5 h-5 p-1 rounded-full"
              style={{
                backgroundColor: findColor.color,
              }}
            >
              <span className="block h-3 w-3 bg-gray-100 rounded-full"></span>
            </div>
          </div>
          <div className="md:ml-4 ml-3 md:w-10/12 w-9/12">
            <h2 className="text-gray-600 ml-5 truncate">{todo.todo}</h2>
            <p className="text-blue-400 text-sm pl-5">
              show task
              <AiOutlineArrowRight style={{ display: "inline" }} />
            </p>
          </div>
          {todo.isComplete && (
            <div className="absolute md:right-0 right-4 w-1/12 flex justify-center">
              <ThemeProvider theme={them}>
                <Tooltip title="Task completed.">
                  <IconButton color={findColor.name}>
                    <BsFillBookmarkCheckFill size={24} />
                  </IconButton>
                </Tooltip>
              </ThemeProvider>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;

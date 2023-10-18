import { useState } from "react";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      a: 2,
    },
    {
      b: 3,
    },
    {
      c: 4,
    },
    {
      d: 5,
    },
  ]);
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

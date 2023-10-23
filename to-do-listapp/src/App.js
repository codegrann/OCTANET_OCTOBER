import { useState } from "react";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      a: 2,
    },
    {
      a: 3,
    },
    {
      a: 4,
    },
    {
      a: 5,
    },
  ]);
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

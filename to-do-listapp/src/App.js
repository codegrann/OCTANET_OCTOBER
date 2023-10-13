import { useState } from "react";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      a: 2,
    },
    {
      a: 2,
    },
    {
      a: 2,
    },
    {
      a: 2,
    },
  ]);
  return (
    <div>
      <TaskList tasks={tasks} />
      {tasks.forEach((task) => console.log(task))}
    </div>
  );
}

export default App;

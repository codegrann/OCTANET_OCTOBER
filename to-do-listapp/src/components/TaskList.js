import { useState } from "react";
import Task from "./Task";
function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      taskTitle: "Finish my project",
      days: 10,
    },
    {
      id: 2,
      taskTitle: "Visit the deans office",
      days: 3,
    },
    {
      id: 3,
      taskTitle: "Write a thesis",
      days: 15,
    },
  ]);

  // const deadLine = prompt("dd/mm/yy");
  return (
    <div>
      <p>This tasklist includes: </p>
      <div>
        <input type="text" placeholder="enter title of your task" />
        <button>Add</button>
      </div>
      {taskList.map((task) => (
        <Task id={task.id} taskTitle={task.taskTitle} days={task.days} />
      ))}
      {/* <Task /> */}
    </div>
  );
}
export default TaskList;

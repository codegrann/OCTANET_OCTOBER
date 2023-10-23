import { useState } from "react";
import Task from "./Task";
function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState([
    {
      taskTitle: "Finish my project",
      days: 10,
    },
  ]);

  // const taskTitle = "Finish my project";
  // const days = 10;
  // const deadLine = prompt("dd/mm/yy");
  return (
    <div>
      <p>This tasklist includes: </p>
      <div>
        <input type="text" placeholder="enter title of your task" />
        <button>Add</button>
      </div>
      {taskList.map((task) => {
        <Task taskTitle={task.taskTitle} days={task.days} />;
      })}
      {/* <Task /> */}
    </div>
  );
}
export default TaskList;

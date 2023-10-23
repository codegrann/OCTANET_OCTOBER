import { useState } from "react";
import Task from "./Task";
function TaskList({ tasks }) {
  const taskTitle = "Finish my project";
  const days = 10;
  // const deadLine = prompt("dd/mm/yy");
  return (
    <div>
      <p>This tasklist includes: </p>
      <Task taskTitle={taskTitle} days={days} />
    </div>
  );
}
export default TaskList;

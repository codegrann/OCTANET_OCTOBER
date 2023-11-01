import { useState } from "react";
import Task from "./Task";
function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      taskTitle: "Finish my project",
      dueDtae: 10,
    },
  ]);

  function addTask(e) {
    setTaskList([
      ...taskList,
      {
        id: taskList.length - 1,
        taskTitle: e.target.value,
      },
    ]);
  }

  // const deadLine = prompt("dd/mm/yy");
  return (
    <div>
      <p>Your Tasks: </p>
      <div>
        <input type="text" placeholder="enter the task name" />
        <button onClick={addTask}>Add</button>
      </div>

      {taskList.map((task) => (
        <Task id={task.id} taskTitle={task.taskTitle} days={task.days} />
      ))}
    </div>
  );
}
export default TaskList;

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
  const [title, setTitle] = useState("");

  function getRemainingDays() {
    const dueDate = new Date(prompt("Due date: yyyy-mm-dd"));
    const currentDate = new Date();
    const days = Math.ceil((dueDate - currentDate) / (24 * 60 * 60 * 1000));

    return days;
  }
  // setInterval(getRemainingDays(), 86400000);

  function addTask(e) {
    // getRemainingDays();

    // ADD TASK TO THE LIST OF TASKS
    setTaskList([
      ...taskList,
      {
        id: taskList.length - 1,
        taskTitle: title,
        days: getRemainingDays(),
      },
    ]);
  }

  // const deadLine = prompt("dd/mm/yy");
  return (
    <div>
      <p>Your Tasks: </p>
      <div>
        <input
          type="text"
          placeholder="enter the task name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      {taskList.map((task) => (
        <Task id={task.id} taskTitle={task.taskTitle} days={task.days} />
      ))}
    </div>
  );
}
export default TaskList;

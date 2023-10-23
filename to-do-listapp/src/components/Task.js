import { useState } from "react";

function Task({ taskTitle, days }) {
  const [done, setDone] = useState(false);

  function setTaskDone() {
    setDone(true);
  }

  return (
  {done ? null : (
    <div className="task" style={{ display: "flexbox", gap: "2rem" }}>
      <input type="checkbox" />
      <input type="text" name="" value={taskTitle} />
      <button onClick={setTaskDone}>X</button>
      <p style={{ display: "inline" }}>{days} days to go</p>
    </div>
  )}
)

}
export default Task;

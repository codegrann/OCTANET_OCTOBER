import { useState } from "react";

function Task({ taskTitle, days }) {
  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState(false);

  function setTaskDone() {
    setDone(true);
  }
  function checking() {
    setChecked(true);
    setTimeout(setTaskDone, 2000);
  }

  return done ? null : (
    <div className="task" style={{ display: "flexbox", gap: "2rem" }}>
      <input type="checkbox" onClick={checking} />
      <input
        type="text"
        name=""
        value={taskTitle}
        style={{ textDecoration: checked ? "line-through" : "none" }}
      />
      <button onClick={setTaskDone}>X</button>
      <p style={{ display: "inline" }}>{days} days to go</p>
    </div>
  );
}
export default Task;

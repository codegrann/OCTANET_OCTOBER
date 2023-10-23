import Task from "./Task";
function TaskList({ tasks }) {
  const taskTitle = "Finish my project";
  // const deadLine = prompt("dd/mm/yy");
  return (
    <div>
      <p>This tasklist includes: </p>
      <Task taskTitle={taskTitle} />
    </div>
  );
}
export default TaskList;

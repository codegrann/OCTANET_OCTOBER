function TaskList({ tasks }) {
  //   const list = function list(tasks) {
  const list = tasks.forEach((task) => <li key="task.a">{task.a}</li>);
  // };
  return (
    <div>
      <p>This tasklist includes: </p>
      <ul>{list}</ul>
    </div>
  );
}
export default TaskList;

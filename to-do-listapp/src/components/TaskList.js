function TaskList({ tasks }) {
  //   const list = function list(tasks) {
  //   const list = tasks.foreach((task) => <li id="task.a">{task.a}</li>);
  // };
  return (
    <div>
      <p>This tasklist includes: </p>
      <ul>
        {tasks.forEach((task) => (
          <li>{task.a.value}</li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;

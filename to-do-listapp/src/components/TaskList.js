function TaskList({ tasks }) {
  const list = function list(tasks) {
    tasks.foreach((task) => <li>task.a</li>);
  };
  return (
    <div>
      <p>This tasklist includes: </p>
      <ul>{list}</ul>
    </div>
  );
}
export default TaskList;

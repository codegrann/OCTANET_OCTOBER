function Task() {
  return (
    <div className="task" style={{ display: "flexbox", gap: "2rem" }}>
      <input type="checkbox" />
      <input type="text" name="" />
      <button>X</button>
      <p style={{ display: "inline" }}>3 days to go</p>
    </div>
  );
}
export default Task;

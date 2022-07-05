import { useState } from "react";
import { TiDelete } from "react-icons/ti";
const ShowTasks = ({ tasks, removeTask, isDonen, handleChange }) => {
  // const [isDonen, setIsDonen] = useState(false);
  // console.log(isDonen);
  // const handleChange = (id) => {
  //   const lineTask = tasks.map((item) => item.id === id);
  //   setIsDonen(!isDonen);
  // };
  return (
    <div className="container">
      {tasks.length === 0
        ? "No task"
        : tasks.map((item) => {
            const { id, task, day, isDone } = item;
            return (
              <div className="task" key={id}>
                <div
                  onClick={() => handleChange(id)}
                  className={isDone ? "done" : null}
                >
                  <div className="task-row">
                    <h3>{task}</h3>
                    <p>{day}</p>
                  </div>
                </div>
                <TiDelete
                  size={30}
                  onClick={() => {
                    removeTask(id);
                  }}
                />
              </div>
            );
          })}
    </div>
  );
};

export default ShowTasks;
//  className={isDonen && "done"}

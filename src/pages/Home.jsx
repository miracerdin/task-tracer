import React from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import { useState, useEffect } from "react";
// import data from "../helper/starterData";
const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    const newTask = tasks.filter((item) => item.id !== id);
    setTasks(newTask);
  };

  const [isDonen, setIsDonen] = useState("show");
  // console.log(isDonen);
  const handleChange = (id) => {
    const lineTask = tasks.filter((item) => item.id === id);
    lineTask[0].isDone = !lineTask[0].isDone;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    setIsDonen("mirac");

    console.log(tasks);
    console.log(lineTask);
    // setIsDonen(!isDonen);
  };
  useEffect(() => {
    setIsDonen("fatih");
  }, [isDonen]);

  return (
    <div className="home">
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTasks
        tasks={tasks}
        removeTask={removeTask}
        handleChange={handleChange}
        isDonen={isDonen}
      />
    </div>
  );
};

export default Home;

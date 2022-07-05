import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [renderAddForm, setRenderAddForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Feed gigi",
      day: "Feb 16th at 10 am",
      reminder: true,
    },
    {
      id: 2,
      description: "Meeting",
      day: "Feb 16th at 11 am",
      reminder: true,
    },
    {
      id: 3,
      description: "Go jogging",
      day: "Feb 16th at 12 am",
      reminder: true,
    },
  ]);

  // Create task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000);
    let newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTaskById = (id) => {
    console.log(tasks);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle remainder
  const toggleRemainderById = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setRenderAddForm(!renderAddForm)}
        renderAddForm={renderAddForm}
      />
      {renderAddForm && <AddTask onSubmission={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTaskById}
          onToggle={toggleRemainderById}
        />
      ) : (
        "Nothing to show"
      )}
    </div>
  );
};

export default App;

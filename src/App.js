import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {

  const [tasks, setTasks]  = useState([
    {
        id: 1,
        description: "Feed gigi",
        day: "Feb 16th at 10 am",
        reminder: true 
    },
    {
        id: 2,
        description: "Feed gigi",
        day: "Feb 16th at 10 am",
        reminder: true 
    },
    {
        id: 3,
        description: "Feed gigi",
        day: "Feb 16th at 10 am",
        reminder: true 
    }
]);

// Delete task
const deleteTaskById = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

// Toggle remainder
const toggleRemainderById = (id) => {
  setTasks(tasks.map((task) => 
    task.id === id ? 
    {...task, reminder: !task.reminder} 
    : task)
  );
};

  return (
    <div className="container">
      <Header title="Task Tracker"/>

      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTaskById} onToggle={toggleRemainderById}/> 
      : "Nothing to show"}
      
    </div>
  );
}

export default App;

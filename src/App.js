import { useState, useEffect } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  // State for knowing when to render add form
  const [renderAddForm, setRenderAddForm] = useState(false);
  // State for holding tasks
  const [tasks, setTasks] = useState([]);

  // Load when refreshing website
  useEffect(() => {
    // Get all tasks
    const getTasks = async () => {
      const serverTasks = await fetchTasks();
      setTasks(serverTasks);
    };

    getTasks();
  }, []);

  // Fetch tasks from task microservice and return it as a promise
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:8080/api/v1/task", {
      method: "GET",
    });
    const data = await response.json();

    return data;
  };

  // Fetch a task by id from task microservice and return it as a promise
  const fetchTaskById = async (id) => {
    const response = await fetch(`http://localhost:8080/api/v1/task/${id}`, {
      method: "GET",
    });
    const data = await response.json();

    return data;
  };

  // Create task
  const addTask = async (task) => {
    const response = await fetch("http://localhost:8080/api/v1/task", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTaskById = async (id) => {
    await fetch(`http://localhost:8080/api/v1/task/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle remainder
  const toggleRemainderById = async (id) => {
    let savedTask = await fetchTaskById(id);
    savedTask = { ...savedTask, reminder: !savedTask.reminder };

    const response = await fetch(`http://localhost:8080/api/v1/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(savedTask),
    });

    const updatedTask = await response.json();

    // Update ui
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: updatedTask.reminder } : task
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

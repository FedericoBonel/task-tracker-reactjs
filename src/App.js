import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

import {
  getAllTasks,
  getTaskById,
  saveTask,
  deleteTask,
  updateTask,
} from "./repositories/TaskRepository";

const App = () => {
  // State for knowing when to render add form
  const [renderAddForm, setRenderAddForm] = useState(false);
  // State for holding tasks
  const [tasks, setTasks] = useState([]);

  // Load when refreshing website
  useEffect(() => {
    const getTasks = async () => {
      const serverTasks = await getAllTasks();
      // Update UI
      setTasks(serverTasks);
    };
    getTasks();
  }, []);

  // Create task
  const addTask = async (task) => {
    const newTask = await saveTask(task);

    // Update UI
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTaskById = async (id) => {
    deleteTask(id);

    // Update UI
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle remainder
  const toggleRemainderById = async (id) => {
    let savedTask = await getTaskById(id);
    savedTask = { ...savedTask, reminder: !savedTask.reminder };

    const updatedTask = await updateTask(id, savedTask);

    // Update ui
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: updatedTask.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setRenderAddForm(!renderAddForm)}
          renderAddForm={renderAddForm}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

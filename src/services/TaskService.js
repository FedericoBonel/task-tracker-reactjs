// Fetch tasks from task microservice and return it as a promise
const getAllTasks = async () => {
  const response = await fetch("http://localhost:8080/api/v1/task", {
    method: "GET",
  });
  const tasks = await response.json();

  return tasks;
};

// Fetch a task by id from task microservice and return it as a promise
const getTaskById = async (id) => {
  const response = await fetch(`http://localhost:8080/api/v1/task/${id}`, {
    method: "GET",
  });
  const task = await response.json();

  return task;
};

// Save a task in microservice
const saveTask = async (task) => {
  const response = await fetch("http://localhost:8080/api/v1/task", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = await response.json();

  return newTask;
};

// Delete a task from microservice
const deleteTask = async (id) => {
  await fetch(`http://localhost:8080/api/v1/task/${id}`, {
    method: "DELETE",
  });
};

// Update a task in microservice
const updateTask = async (id, task) => {
  const response = await fetch(`http://localhost:8080/api/v1/task/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

  const updatedTask = await response.json();

  return updatedTask;
};

export { getAllTasks, getTaskById, saveTask, deleteTask, updateTask };

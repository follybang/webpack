const baseUrl = "https://613b202e110e000017a4549e.mockapi.io/v1/tasks";

export const getTasks = () =>
  fetch(baseUrl).then((response) => response.json());

export const createTask = (newTask) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newTask),
  });

export const updateTask = (updatedTask, taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedTask),
  });

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

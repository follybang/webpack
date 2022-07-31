import { renderTasks } from "./render.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "./tasksGateway.js";

const inputElem = document.querySelector(".task-input");

export const addNewElem = () => {
  if (inputElem.value === "") return;

  const newTask = {
    text: inputElem.value,
    id: Math.round(Math.random() * 1000),
    done: false,
  };

  createTask(newTask).then(() => renderTasks());

  inputElem.value = "";
};

export const turnElChecked = (event) => {
  const isCheckbox = event.target.classList.contains("list__item-checkbox");
  if (!isCheckbox) {
    return;
  }

  const taskId = event.target.dataset.id;
  getTasks().then((tasksList) => {
    const taskById = tasksList.find((task) => task.id === taskId);
    const done = event.target.checked;
    const { text, addDate } = taskById;

    const updatedTask = {
      text,
      addDate,
      done,
    };

    updateTask(updatedTask, taskId).then(() => renderTasks());
  });
};

export const onDeleteTask = (event) => {
  const isDeleteEl = event.target.classList.contains("list__item-delete");
  if (!isDeleteEl) {
    return;
  }

  const taskId = event.target.dataset.id;
  getTasks().then((tasksList) => {
    const taskById = tasksList.find((task) => task.id === taskId);

    deleteTask(taskById.id).then(() => renderTasks());
  });
};

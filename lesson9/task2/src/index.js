import { renderTasks } from "./scripts/render.js";
import { initHandlers } from "./scripts/initHandlers.js";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initHandlers();
});

const onStorageChange = (event) => {
  if (event.key === "tasksList") {
    renderTasks();
  }
};

window.addEventListener("storage", onStorageChange);

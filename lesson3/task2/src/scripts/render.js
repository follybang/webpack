import { getTasks } from './tasksGateway.js';

const listElem = document.querySelector('.list');

export const renderTasks = () => {
  getTasks().then(tasksList => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
      .sort((a, b) => a.done - b.done)
      .map(({ text, done, id }) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        const checkbox = document.createElement('input');
        const deleteEl = document.createElement('span');
        const textEl = document.createElement('span');
        const container = document.createElement('span');
        container.classList = 'list__item-cont';
        textEl.classList = 'list__item-text';
        textEl.textContent = text;
        deleteEl.classList = 'list__item-delete';
        deleteEl.textContent = '+';
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = done;
        checkbox.dataset.id = id;
        deleteEl.dataset.id = id;
        checkbox.classList.add('list__item-checkbox');
        if (done) {
          listItemElem.classList.add('list__item_done');
          textEl.classList.add('list__text_done');
        }

        container.append(checkbox, textEl);
        listItemElem.append(container, deleteEl);

        return listItemElem;
      });

    listElem.append(...tasksElems);
  });
};

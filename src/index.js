document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskDescription = document.getElementById('new-task-description').value;
    if (taskDescription.trim() !== '') {
      createTask(taskDescription);
      form.reset();
    }
  });

  function createTask(description) {
    const taskItem = document.createElement('li');
    taskItem.textContent = description;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }
});

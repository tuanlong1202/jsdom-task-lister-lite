document.addEventListener("DOMContentLoaded", () => {
  // your code here
  var taskForm = document.getElementById('create-task-form');
  var taskDescription = document.getElementById('new-task-description');
  var ulTask = document.getElementById('tasks');
  taskForm.addEventListener('submit', function(ev) {
      ev.preventDefault();
      ulTask.innerHTML += `<li>` + taskDescription.value + `</li>`;
      ev.target.reset();
  })
});

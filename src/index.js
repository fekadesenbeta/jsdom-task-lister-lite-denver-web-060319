document.addEventListener("DOMContentLoaded", () => {
  const tasks = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const description = formData.get("new-task-description");
    const color = formData.get("color");
    const taskList = new TaskList(description, color);
    tasks.appendChild(taskList.render());
    input.value = "";
  });
});

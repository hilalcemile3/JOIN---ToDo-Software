document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.querySelector(".add-task-btn");
    const taskModal = document.getElementById("task-modal");
    const cancelTaskButton = document.querySelector(".cancel-task");
    const taskForm = document.getElementById("task-form");

    // Open the modal when Add Task is clicked
    addTaskButton.addEventListener("click", () => { 
        taskModal.classList.remove("hidden"); 
    });

    // Close the modal when Cancel is clicked
    cancelTaskButton.addEventListener("click", () => {
        taskModal.classList.add("hidden"); 
    });

    // Add task to the board
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const title = document.getElementById("task-title").value;
        const description = document.getElementById("task-description").value;
        const dueDate = document.getElementById("task-due-date").value;
        const priority = document.getElementById("task-priority").value;

        const newTask = createTaskElement(title, description, dueDate, priority);
        document.querySelector('[data-status="to-do"] .kanban-cards').appendChild(newTask);

        taskModal.classList.add("hidden"); 
        taskForm.reset(); 
    });
});

// Create a task element dynamically
function createTaskElement(title, description, dueDate, priority) {
    const task = document.createElement("div");
    task.classList.add("kanban-card");
    task.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <div>Due: ${dueDate} | Priority: ${priority}</div>
    `;
    return task;
}

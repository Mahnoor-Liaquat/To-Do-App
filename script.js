// Load tasks from local storage
 document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
 });

// Function to add a new task
function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        let newTask = document.createElement('li');
        newTask.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';

        saveTasks();
    }
}

// Function to remove a task
function removeTask(button) {
    let taskList = document.getElementById('taskList');
    let taskToRemove = button.parentNode;
    taskList.removeChild(taskToRemove);

    saveTasks();
}

// Function to save tasks to local storage
function saveTasks() {
    let taskList = document.getElementById('taskList').innerHTML;
    localStorage.setItem('tasks', taskList);
}

// Function to load tasks from local storage
function loadTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = localStorage.getItem('tasks') || '';
}

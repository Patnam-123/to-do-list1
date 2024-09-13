// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') return;
    
    const taskList = document.getElementById('taskList');

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskInput;

    // Add 'completed' class toggle on click
    li.onclick = function () {
        li.classList.toggle('completed');
    };

    // Append the new task to the task list
    taskList.appendChild(li);

    // Clear the input field
    document.getElementById('taskInput').value = '';
}

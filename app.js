const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="task-buttons ms-auto">
                <button class="btn btn-danger delete-btn">Delete</button>
                <button class="btn btn-success complete-btn">Complete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        li.querySelector('.delete-btn').addEventListener('click', deleteTask);
        li.querySelector('.complete-btn').addEventListener('click', toggleTaskCompletion);
    } else {
        alert('Please enter a task!');
    }
}

function deleteTask() {
    const listItem = this.parentElement.parentElement;
    listItem.classList.add('delete-animation');
    setTimeout(() => {
        listItem.remove();
    }, 500);
}

function toggleTaskCompletion() {
    const listItem = this.parentElement.parentElement;
    listItem.classList.toggle('completed');
}

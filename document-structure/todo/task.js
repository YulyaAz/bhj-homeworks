const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');

function createTask(title) {
    const task = document.createElement('div');
    task.className = 'task';
    
    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = title;
    
    const removeButton = document.createElement('a');
    removeButton.href = '#';
    removeButton.className = 'task__remove';
    removeButton.innerHTML = '&times;';
    
    removeButton.addEventListener('click', (event) => {
        event.preventDefault();
        task.remove(); 
    });
    
    task.appendChild(taskTitle);
    task.appendChild(removeButton);
    
    return task;
}

function addTask() {
    const title = taskInput.value.trim();
    
    if (title) {
        const task = createTask(title);
        tasksList.appendChild(task);
        
        taskInput.value = '';
    }
}

addButton.addEventListener('click', (event) => {
    event.preventDefault();
    addTask();
});

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});
document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
        taskInput.focus();
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    taskList.appendChild(listItem);
}

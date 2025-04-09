const addTaskButton = document.getElementById('addTaskButton');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');

        li.appendChild(deleteButton);

        taskList.appendChild(li);

        newTaskInput.value = '';

        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li);
        });
    }
}

addTaskButton.addEventListener('click', addTask);

newTaskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

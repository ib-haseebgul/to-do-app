function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") return;

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `
        <label class="task-label">
            <input type="checkbox" class="task-checkbox" onclick="markDone(this)">
            <span class="task-text">${taskValue}</span>
        </label>
        <button class="delete-btn" onclick="deleteTask(this)">✖</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}

function markDone(checkbox) {
    let taskText = checkbox.nextElementSibling;
    taskText.classList.toggle("done", checkbox.checked);
}

function deleteTask(button) {
    button.parentElement.remove();
}

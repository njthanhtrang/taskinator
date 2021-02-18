var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    // create new task item
    var listItemEl = document.createElement("li");
    // style new task item
    listItemEl.className = "task-item";
    // add text
    listItemEl.textContent = "This is a new task.";
    // append element to task list
    tasksToDoEl.appendChild(listItemEl);
};

// anonymous function
buttonEl.addEventListener("click", createTaskHandler);

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();

    // create new task item
    var listItemEl = document.createElement("li");
    // style new task item
    listItemEl.className = "task-item";
    // add text
    listItemEl.textContent = "This is a new task.";
    // append element to task list
    tasksToDoEl.appendChild(listItemEl);
};

// from-specific event, submit(onsubmit)
// type="submit" in button, when user presses Enter
formEl.addEventListener("submit", createTaskHandler);

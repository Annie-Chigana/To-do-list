const taskInput = document.getElementById("task-name");
const dateInput = document.getElementById("date");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");

saveBtn.addEventListener("click", function() {

    const task = taskInput.value;
    const date = dateInput.value;

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    const taskData = {
        name:task,
        date:date
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(taskData);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    window.location.href = "list.html";


});

clearBtn.addEventListener("click", function(){
    taskInput.value = "";
    dateInput.value = "";
});

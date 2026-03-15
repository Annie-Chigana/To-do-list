const taskInput = document.getElementById("task-name");
const dateInput = document.getElementById("date");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const taskList = document.getElementById("task-list");


// SAVE TASK
if(saveBtn){

    saveBtn.addEventListener("click", function(){

        const task = taskInput.value;
        const date = dateInput.value;

        if(task === ""){
            alert("Please enter a task");
            return;
        }

        const taskData = {
            name: task,
            date: date
        };

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        tasks.push(taskData);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        window.location.href = "list.html";

    });

}


// CLEAR INPUTS
if(clearBtn){

    clearBtn.addEventListener("click", function(){
        taskInput.value = "";
        dateInput.value = "";
    });

}


// DISPLAY TASKS
if(taskList){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task){

        const taskItem = document.createElement("div");
        taskItem.classList.add("task");

        taskItem.innerHTML = `
            <h3>${task.name}</h3>
            <p>${task.date}</p>
        `;

        taskList.appendChild(taskItem);

    });

}
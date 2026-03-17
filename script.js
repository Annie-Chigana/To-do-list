const taskInput = document.getElementById("task-name");
const dateInput = document.getElementById("date");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const taskList = document.getElementById("task-list");
const completedList = document.getElementById("completed-list");

///new

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
            <div class="task-info">
        <h3>${task.name}</h3>
        <p>${task.date}</p>
    </div>

    <div class="task-actions">
        <i class="fa-solid fa-check complete-btn"></i>
        <i class="fa-solid fa-trash delete-btn"></i>
    </div>
        `;

        taskList.appendChild(taskItem);

    });

}
  const completeBtn = taskItem.querySelector(".complete-btn");

    completeBtn.addEventListener("click", function(){

        let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

        completedTasks.push(task);

        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

        tasks.splice(index,1);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        location.reload();
    });

if(completedList){

    let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

    completedTasks.forEach(function(task){

        const taskItem = document.createElement("div");
        taskItem.classList.add("task");

        taskItem.innerHTML = `
            <h3>${task.name}</h3>
            <p>${task.date}</p>
        `;

        completedList.appendChild(taskItem);

    });

}
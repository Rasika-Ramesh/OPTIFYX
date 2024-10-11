const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");

function addTask(){
    if(inputTask.value === ''){
        alert("Please enter a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        taskList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-trash-can" style="color: #3d00f5;"></i>';
        li.appendChild(span);

    }
    inputTask.value = "";
    saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

        if (e.target.classList.contains("checked")) {
            taskList.appendChild(e.target);
        } else {
            taskList.prepend(e.target);
        }
        saveData();

    }else if(e.target.tagName === "SPAN" || e.target.tagName === "I"){
        e.target.closest("li").remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function displayTask(){
    taskList.innerHTML = localStorage.getItem("data");
}

displayTask();
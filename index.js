const input = document.getElementById("input-box");
const list = document.getElementById("task-list");

function addTask(){
    if (input.value==="") {
        alert("You must write a task first!");
    }else{
        let Li = document.createElement("li");
        Li.innerHTML = input.value;
        list.appendChild(Li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        Li.appendChild(span);
    }
    input.value = "";
    saveData();
}


list.addEventListener("click", (e)=>{
    if (e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

showTask();
function addTask(){

    let title =
    document.getElementById("title").value;

    let description =
    document.getElementById("description").value;

    if(title === "" || description === ""){
        alert("Please enter title and description");
        return;
    }

    let task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>

        <button class="complete"
        onclick="completeTask(this)">
        Complete
        </button>

        <button class="edit"
        onclick="editTask(this)">
        Edit
        </button>

        <button class="delete"
        onclick="deleteTask(this)">
        Delete
        </button>
    `;

    document.getElementById("pendingTasks")
    .appendChild(task);

    document.getElementById("title").value="";
    document.getElementById("description").value="";
}

function completeTask(button){

    let task =
    button.parentElement;

    button.remove();

    document.getElementById("completedTasks")
    .appendChild(task);
}

function deleteTask(button){

    button.parentElement.remove();
}

function editTask(button){

    let task =
    button.parentElement;

    let title =
    task.querySelector("h3");

    let description =
    task.querySelector("p");

    let newTitle =
    prompt("Edit Title", title.innerText);

    let newDescription =
    prompt("Edit Description",
    description.innerText);

    if(newTitle){
        title.innerText = newTitle;
    }

    if(newDescription){
        description.innerText =
        newDescription;
    }
}
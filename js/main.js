let tbody = document.getElementById("tbody");
let taskName = document.getElementById("taskName");
let taskPriority = document.getElementById("taskPriority");
let add = document.getElementById("add");
let allPriority = ["Low", "Intermediate", "High"];
let tasks = [
    {
        name: "Task1",
        priority: 2,
    },
    {
        name: "Task2",
        priority: 0,
    },
    {
        name: "Task3",
        priority: 1,
    },
];

function write() {
    counter = 1;
    tbody.innerHTML = "";
    for (const key in tasks) {
        tbody.innerHTML += ` <tr>
                              <th>${counter}</th>
                              <td>${tasks[key].name}</td>
                              <td> ${allPriority[tasks[key].priority]}</td>
                              <td>
                              <div class = "d-flex">
                                 <i class="bi bi-trash fs-4  text-danger delete" data-id=${key} onclick="deleteTask(${key},this)"></i>
                                 <i class="bi bi-pencil-square fs-4 ms-1 text-primary edit" data-id=${key} onclick="editTask(${key},this)"></i>
                                 <button class="btn btn-primary hidden" onclick = "updateTask(${key},this)">Save</button>
                                 <button class="btn btn-danger ms-1 hidden" onclick="cancelEdit()">Cancel</button>
                                 </div>
                              </td>
                          </tr> `;
        counter++;
    }
}
// window.onload.write();
window.onload = function () {
    tasks.sort((a, b) =>
        a.priority < b.priority ? 1 : b.priority < a.priority ? -1 : 0
    );
    write();
};
function addNew() {
    if (taskName.value == "" || taskPriority.value == "") {
        alert("Invalid Task Data!!")
        return;
    }
    let newTask = {
        name: taskName.value,
        priority: Number(taskPriority.value),
    };
    tasks.push(newTask);
    taskName.value = "";
    taskPriority.value = "";
    tasks.sort((a, b) =>
        a.priority < b.priority ? 1 : b.priority < a.priority ? -1 : 0
    );
    write();
}
add.onclick = addNew;
// add.addEventListener("click", addNew);

//console.log( document.getElementsByClassName('delete'));
function deleteTask(key, el) {
    tasks.splice(key, 1);
    write();
}
let editTask = function (key, el) {
    let deleteBtn = el.previousElementSibling;
    let saveBtn = el.nextElementSibling;
    let cancelBtn = saveBtn.nextElementSibling;
    let priorityTd = el.parentElement.parentElement.previousElementSibling;
    let nameTd = priorityTd.previousElementSibling;
   
    el.classList.add('hidden');
    deleteBtn.classList.add('hidden');
    saveBtn.classList.remove('hidden');
    cancelBtn.classList.remove('hidden');
    nameTd.innerHTML = `<input class="form-control" value="${tasks[key].name}" />`

    let options = ''
    for (i in allPriority) {

        options += `<option ${i == tasks[key].priority ? 'selected' : ''} value="${i}">${allPriority[i]}</option>`
    }

    priorityTd.innerHTML = `<select class="form-select">${options}</select>`
}


let cancelEdit = function () {
    write();
}
let updateTask = function (key, el) {
    // let deleteBtn = el.previousElementSibling;
    // let saveBtn = el.nextElementSibling;
    // let cancelBtn = saveBtn.nextElementSibling;
    let taskPriority = el.parentElement.parentElement.previousElementSibling.firstElementChild;
    let taskName = el.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
    if (taskName.value == "" || taskPriority.value == "") {
        alert("Invalid Task Data!!")
        return;
    }
    tasks[key].name = taskName.value;
    tasks[key].priority = taskPriority.value;
    tasks.sort((a, b) =>
        a.priority < b.priority ? 1 : b.priority < a.priority ? -1 : 0
    );
    write();
}
const sortByName = function(){
    tasks.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 0
    );
    write();
}
const sortByPriority = function(){
    tasks.sort((a, b) =>
        a.priority < b.priority ? 1 : b.priority < a.priority ? -1 : 0
    );
    write();
}
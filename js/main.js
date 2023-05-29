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
                              <td><i class="bi bi-trash fs-4 text-danger delete" data-id=${key} onclick="deleteTask(${key},this)"></i></td>
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
    console.log("test", key, el);
    tasks.splice(key, 1);
    write();
}
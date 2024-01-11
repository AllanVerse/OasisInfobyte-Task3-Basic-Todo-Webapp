var currentHour = new Date().getHours();
var greeting = "";
        if (currentHour >= 5 && currentHour < 12) {
            greeting = "Good Morning";
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Evening";
        }
document.getElementById("greeting").innerText = greeting;

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var li = document.createElement('li');
    li.innerHTML = `
        <div class="checkbox-container">
            <input type="checkbox" onclick="checkBox(this)" class="checkbox">
            <span>${taskInput.value}</span>
        </div>
        <button class="rmovTask" onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function checkBox(checkbox) {
    var li = checkbox.parentElement;
    alert('Congrats for completing the task: ' + li.querySelector('span').innerText);
}

function removeTask(button) {
    var li = button.parentElement;
    li.parentElement.removeChild(li);
}

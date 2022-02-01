//Query Selector

const input_task = document.querySelector('#input_todo');
const input_button = document.querySelector('#input_button_todo');
const task_list = document.querySelector('.tasks');
    
// Event Listener 

input_button.addEventListener('click', addTask);
task_list.addEventListener('click', doTask);


// Functions

function addTask(event) {

    // event.preventDefault();

    if(input_task.value != "") { 
    
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `<input type="checkbox" class="checkBox" /><br/><h4 class="inComplete">${input_task.value}</h4>`;

        const actions = document.createElement('div');
        actions.classList.add('actions');

        const delete_button = document.createElement('button');
        delete_button.classList.add('deleteButton');
        delete_button.innerText = "Delete";
        
        actions.appendChild(delete_button);
        task.appendChild(actions);
        task_list.appendChild(task);
        input_task.value = ""; 


    } else {
        alert("Please Enter a task.");
    }
    return;
}


function doTask(e) {

    const item = e.target;

    const todo = item.parentElement;

    if(item.classList[0] === 'deleteButton') {
        const todo_parent = todo.parentElement;
        todo_parent.remove(); 
    }
    
    if(item.classList[0] === 'checkBox') {
        todo.classList.toggle('completed');
    }
}
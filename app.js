// //Select DOM
// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");

// //Event Listeners
// document.addEventListener("DOMContentLoaded", getTodos);
// todoButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", deleteTodo);
// filterOption.addEventListener("click", filterTodo);

// //Functions

// function addTodo(e) {
//   //Prevent natural behaviour
//   e.preventDefault();
//   //Create todo div
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   //Create list
//   const newTodo = document.createElement("li");
//   newTodo.innerText = todoInput.value;
//   //Save to local - do this last
//   //Save to local
//   saveLocalTodos(todoInput.value);
//   //
//   newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);
//   todoInput.value = "";
//   //Create Completed Button
//   const completedButton = document.createElement("button");
//   completedButton.innerHTML = `<i class="fas fa-check"></i>`;
//   completedButton.classList.add("complete-btn");
//   todoDiv.appendChild(completedButton);
//   //Create trash button
//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
//   trashButton.classList.add("trash-btn");
//   todoDiv.appendChild(trashButton);
//   //attach final Todo
//   todoList.appendChild(todoDiv);
// }

// function deleteTodo(e) {
//   const item = e.target;

//   if (item.classList[0] === "trash-btn") {
//     // e.target.parentElement.remove();
//     const todo = item.parentElement;
//     todo.classList.remove()
//     //at the end
//     removeLocalTodos(todo);
//     todo.addEventListener("transitionend", e => {
//       todo.remove();
//     });
//   }
//   if (item.classList[0] === "complete-btn") {
//     const todo = item.parentElement;
//     todo.classList.toggle("completed");
//     console.log(todo);
//   }
// }

// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   todos.forEach(function(todo) {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "uncompleted":
//         if (!todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//     }
//   });
// }

// function saveLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }
// function removeLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   const todoIndex = todo.children[0].innerText;
//   todos.splice(todos.indexOf(todoIndex), 1);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getTodos() {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.forEach(function(todo) {
//     //Create todo div
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     //Create list
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todo;
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);
//     todoInput.value = "";
//     //Create Completed Button
//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = `<i class="fas fa-check"></i>`;
//     completedButton.classList.add("complete-btn");
//     todoDiv.appendChild(completedButton);
//     //Create trash button
//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
//     trashButton.classList.add("trash-btn");
//     todoDiv.appendChild(trashButton);
//     //attach final Todo
//     todoList.appendChild(todoDiv);
//   });
// }

const todo = [
   
]


window.addEventListener('load', () => {
    const form = document.querySelector('.form');
    const title = document.getElementById('task-title');
    const desc = document.getElementById('task-desc');
    const date = document.getElementById('task-date');
    const list = document.getElementById('task' );


    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        console.log('submit form');
        if(!title || !desc || !date){
            alert('please fill in the form');
            return; 
        } 
        const task_el = document.createElement('div')
        task_el.classList.add('task')

        const title_el = document.createElement('div')
        title_el.classList.add('title')
        title_el.innerText = title.value;

        const desc_el = document.createElement('div')
        desc_el.classList.add('desc')
        desc_el.innerText = desc.value;

        const date_el = document.createElement('div')
        date_el.classList.add('date')
        date_el.innerText = date.value;

        // eddit button
        const edit_el = document.createElement('button')
        edit_el.classList.add('edit')
        edit_el.innerText = 'Edit'

        edit_el.addEventListener('click', () => {

        })

        // delete button
        const delete_el = document.createElement('button')
        delete_el.classList.add('delete')
        delete_el.innerText = 'Delete'

        delete_el.addEventListener('click', () => {
            task_el.removeChild(edit_el)
            task_el.removeChild(desc_el)
            task_el.removeChild(title_el)
            task_el.removeChild(date_el)
            task_el.removeChild(delete_el)
        })



        task_el.appendChild(title_el)
        task_el.appendChild(desc_el)
        task_el.appendChild(date_el)
        task_el.appendChild(edit_el)
        task_el.appendChild(delete_el)
        // task_el.appendChild(task_el)
        document.querySelector('.task-list').appendChild(task_el)

    })
})









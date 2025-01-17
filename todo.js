let todoList = JSON.parse(localStorage.getItem("todos")) || [];

function displayItems() {
  let containerElement = document.querySelector(".todo-list");
  containerElement.innerHTML = ""; // Clear previous items

  todoList.forEach((todo, index) => {
    let { item, dueDate } = todo;
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-item");

    todoElement.innerHTML = `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick="deleteTodo(${index})">Delete</button>
    `;

    containerElement.appendChild(todoElement);
  });
}

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  if (todoItem && todoDate) {
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = "";
    dateElement.value = "";
    saveTodos();
    displayItems();
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  saveTodos();
  displayItems();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todoList));
}

// Initial display of items
displayItems();

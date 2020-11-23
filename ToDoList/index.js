var addToDo = document.querySelector("#modal-btn");
var toDoInput = document.querySelector("#todo-input");
var toDoList = document.querySelector("#todo-list");
var listItems = document.querySelectorAll('input[name="color"]:checked');

$(document).ready(function () {
  $(".modal").modal();
});

addToDo.addEventListener("click", function () {
  let text = toDoInput.value;
  addToList(text);
});

function renderItemsFromLocalStorage(data) {}

function addToList(text) {
  $(toDoList).append(
    `<li><label><input type='checkbox' name='item' class='todo-item'/><span>${text}</span></label></li>`
  );
  updateListItems();
}

function updateListItems() {
  listItems = toDoList.querySelectorAll("li");
  listItems.forEach((listItem) => {
    listItem.querySelector("label").addEventListener("click", updateListItems);
    let span = listItem.querySelector("span");
    let text = span.innerHTML;
    if (listItem.querySelector("input[name='item']").checked) {
      span.innerHTML = `<del>${text}</del>`;
    } else {
      span.innerHTML = span.textContent;
    }
  });
}

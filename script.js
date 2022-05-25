// Toevoegen Knop
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

var ToDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

// Inputveld ontvangen
function addToDoItem() {
	var entryText = ToDoEntryBox.value;
	newToDoItem(entryText);
}

// inputveld verwerken
function newToDoItem(entryText) {
	var toDoItem = document.createElement("li");
	var toDoText = document.createTextNode(entryText);
	toDoItem.appendChild(toDoText);

	toDoList.appendChild(toDoItem);
	toDoItem.addEventListener("dblclick", toggleToDoItemState)
}

// DubbelClick Toggle process
function toggleToDoItemState() {
	if (this.classList.contains("completed")) {
		this.classList.remove("completed");
		
	} else{
		this.classList.add("completed");
		
	}

}

// Verwijder Button
var emptyButton = document.getElementById("emty-button");
emptyButton.addEventListener("click", emptyList);

function emptyList() {
	var toDoItems = toDoList.children;
	while (toDoItems.length > 0){
		toDoItems.item(0).remove();
	}
}

// clearen Button
var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearCompletedToDoItems);

function clearCompletedToDoItems() {
	var completedItems = toDoList.getElementsByClassName("completed");

	while (completedItems.length > 0){
		completedItems.item(0).remove();
	}
}




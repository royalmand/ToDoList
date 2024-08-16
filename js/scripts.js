console.log("To Do List");

// Event listener for the Add button 
addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
    console.log("Add Button Clicked");
    addTask();
});

// Event listener for the Clear All button 
clearAllButton = document.getElementById("clearAllButton");
clearAllButton.addEventListener("click", () => {
    console.log("Clear Button Clicked");
    deleteTask();
});

function addTask() {
    taskInput = document.getElementById("input");
    console.log(taskInput.value)
    const taskValue = taskInput.value;
    console.log(taskValue);
    index = 0;
    
    if (taskValue.trim() !== '') {
        ulElement = document.getElementById("ul");
        index++;

        // Retrive the value from the input field 
        const inputElement = documenxt.createElement("input");
        inputElement.type = "checkbox";
        inputElement.name = "task";
        inputElement.id = `task${index}`;
        inputElement.value = `task${index}`;

        const labelElement = document.createElement("label");
        labelElement.htmlFor = `task${index}`;
        labelElement.textContent = taskValue;

        ulElement.appendChild(inputElement);
        ulElement.appendChild(labelElement);
        ulElement.style.display = "block";

        // Reset variables
        taskInput.value = "";
    } else {
        alert('Please enter a task.');
    }
}

function deleteTask() {
    if (ulElement.value !== '') {
        ulElement = document.getElementById("ul");
        ulElement.innerHTML = "";
    }
};

// Turn on function 
deleteTask();

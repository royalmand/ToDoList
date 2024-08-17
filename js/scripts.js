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
        const liElement = document.createElement("li");
        index++;

        // Retrive the value from the input field 
        const inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        inputElement.name = "task";
        inputElement.id = `task${index}`;
        inputElement.value = `task${index}`;

        const labelElement = document.createElement("label");
        labelElement.htmlFor = `task${index}`;
        labelElement.textContent = taskValue;

        liElement.appendChild(inputElement);
        liElement.appendChild(labelElement);
        ulElement.appendChild(liElement);

        // Reset variables
        taskInput.value = "";
    } else {
        alert('Please enter a task.');
    }
}

function deleteTask() {
    const ulElement = document.getElementById("ul");
    if (ulElement.value !== '') {
        ulElement.innerHTML = "";
    }
};

// Turn on function 
deleteTask();

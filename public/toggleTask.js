
// Asynchronous function to delete a task by its ID
async function deleteTask(taskId) {
    try {
        // Send a DELETE request to the server with the task ID
        const response = await fetch(`/delete/${taskId}`, {
            method: 'DELETE'
        });

        // Check if the response is successful
        if (response.ok) {
            // Find the task element in the DOM and remove it if it exists
            const taskElement = document.getElementById(`task-${taskId}`);
            if (taskElement) {
                taskElement.remove();
            }
            console.log(`Task ${taskId} deleted successfully`);
        } else {
            console.error("Failed to delete task");
        }
    } catch (error) {
        // Log any errors encountered during the request
        console.error("Error:", error);
    }
}

// Function to toggle the visibility of a task's body content by its ID
function toggleTaskBody(taskId) {
    const taskBody = document.getElementById(`task-body-${taskId}`);
    
    // Toggle display style between 'block' and 'none'
    if (taskBody.style.display === "none" || taskBody.style.display === "") {
        taskBody.style.display = "block"; // Show the task body
    } else {
        taskBody.style.display = "none";  // Hide the task body
    }
}

// Function to toggle visibility of an add-task form by its ID
function toggleAddTaskForm(formId) {
    const form = document.getElementById(formId);

    // Toggle display style between 'block' and 'none' for the form
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block"; // Show the form
    } else {
        form.style.display = "none";  // Hide the form
    }
}

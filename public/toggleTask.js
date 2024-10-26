
    async function deleteTask(taskId) {
        try {
            const response = await fetch(`/delete/${taskId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Remove the task element from the UI without a refresh
                const taskElement = document.getElementById(`task-${taskId}`);
                if (taskElement) {
                    taskElement.remove();
                }
                console.log(`Task ${taskId} deleted successfully`);
            } else {
                console.error("Failed to delete task");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    function toggleTaskBody(taskId) {
        const taskBody = document.getElementById(`task-body-${taskId}`);
        if (taskBody.style.display === "none" || taskBody.style.display === "") {
            taskBody.style.display = "block";
        } else {
            taskBody.style.display = "none";
        }
    }
    

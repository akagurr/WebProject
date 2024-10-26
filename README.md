Todo List Web Application

---

Features:

- Task Addition: Easily add new tasks with a title, description, and urgency level.
- Task Categorization: Tasks are automatically sorted into two categories:
    - High-Priority: For tasks marked as urgent
    - Low-Priority: For non-urgent tasks
- Task Search: Quickly find tasks by searching their titles.
- Delete Tasks: Remove tasks individually.
- Real-time Display: Automatically shows tasks in their respective categories on the main dashboard.
- Responsive Design: Ensures compatibility across multiple devices and screen sizes.

Technologies Used:

- Node.js: Backend runtime environment
- MongoDB: Database for storing and managing tasks
- EJS: Templating engine for rendering dynamic HTML pages
- CSS & JavaScript: For the front-end design and interactive elements

Prerequisites:

1. Node.js
2. MongoDB
3. npm (comes with Node.js)

Installation

1. Clone the repository:
   git clone https://github.com/akagurr/WebProject.git

2. Install dependencies:
   npm install express ejs nodemon mongoose express-session bcryptjs

3. Set up MongoDB connection:
   - Create a MongoDB Atlas account or run MongoDB locally.
   - Update the mongoose.connect URL in server.js with your database connection string.

4. Run the application:
   npm start

Access the application:
- Open your browser and go to http://localhost:8000/

Usage:

1. Adding Tasks: Fill in the task title, description, and urgency level.
2. Deleting Tasks: Use the "Delete" button to remove a specific task.
3. View Task Categories: Navigate between high and low-priority tasks.

File Structure:

/models            # Contains Mongoose schemas

/node_modules      # Dependencies

/public            # Static assets (CSS, JavaScript)

/views             # EJS templates for rendering pages

package.json       # Project metadata and dependencies

package-lock.json  # Dependency versions for consistent installs

server.js          # Main server file

README.md          # Project documentation

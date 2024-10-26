# WebProject

Features:
Task Addition: Easily add new tasks with a title, description, and urgency level.
Task Categorization: Tasks are automatically sorted into 2 categories:
Task Search: search tasks by their titles
high-priority
low-priority
Delete Tasks: Remove tasks individually or in bulk.
Real-time Display: Automatically displays tasks in their respective categories on the main dashboard.
Responsive Design: Ensures compatibility across multiple devices and screen sizes.

Technologies Used:
Node.js: Backend runtime environment
MongoDB: Database for storing and managing tasks
EJS: Templating engine for rendering dynamic HTML pages
CSS & JavaScript: For the front-end design and interactive elements

Prerequisites:
Node.js
MongoDB
npm (comes with Node.js)

Installation
Clone the repository:

git clone https://github.com/akagurr/WebProject.git

Install dependencies:
npm install express
npm install ejs
nppm install nodemon
npm install mongoose
npm install express-session
npm install bcryptjs

Set up MongoDB connection:
Create a MongoDB Atlas account or run MongoDB locally.
Update the mongoose.connect URL in server.js with your database connection string.

Run the application:
npm start

Access the application:
Open your browser and go to http://localhost:8000/

Usage:
Adding Tasks: Fill in the task title, description, and urgency level.
Deleting Tasks: Use the "Delete" button to remove a specific task or delete multiple tasks.
View Task Categories: Navigate between different categories based on urgency and importance.

File Structure:
/models             # Contains Mongoose schemas
/node_modules       # Dependencies
/public             # Static assets (CSS, JavaScript)
/views              # EJS templates for rendering pages
package.json        # Project metadata and dependencies
package-lock.json   # Detailed dependency tree and versions for consistent installs
serverme.js         # Main server file
README.md           # Project documentation
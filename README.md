
# Task Management App  

##  Project Overview  
The **Task Management App** is a React and TypeScript-based task management application that allows users to create, edit, delete, and track their tasks. It integrates **Auth0** for authentication and uses **React Context API** for state management.  

##  Project Structure  
```
src/
│── assets/                     # Static assets
│── components/                  # Reusable UI components
│   ├── Auth0Provider.tsx         # Auth0 provider setup
│   ├── AuthenticationGuard.tsx   # Protects routes from unauthenticated access
│   ├── LogoutButton.tsx          # Logout functionality
│   ├── TaskForm.tsx              # Task creation and editing form
│   ├── TaskItem.tsx              # Individual task component
│── context/                     # Context API for global state management
│   ├── TaskContext.tsx           # Task context provider
│── pages/                       # Application pages
│   ├── CallbackPage.tsx          # Auth0 callback handler
│   ├── Login.tsx                 # Login page
│   ├── Register.tsx              # Register page
│   ├── TaskDashboard.tsx         # Main task dashboard
│   ├── TaskDetails.tsx           # Task details view
│── types/                       # TypeScript type definitions
│   ├── types.ts                  # Type definitions for tasks
│── App.tsx                      # Main application component
│── main.tsx                     # Application entry point
│── index.css                    # Global styles
│── App.css                      # Component-specific styles
│── vite-env.d.ts                 # Vite environment declarations
```

##  Features  
- **User Authentication:** Secure login/logout via **Auth0**  
- **Task Management:** Create, edit, delete, and update task status  
- **Task Dashboard:** Displays all tasks with filtering options  
- **Task Details Page:** View detailed information of individual tasks  
- **Context API for State Management:** Efficient state handling  
- **Protected Routes:** Ensures users must be logged in to access certain pages  

##  Installation & Setup  
### Prerequisites  
Ensure you have the following installed:  
- **Node.js** (v16 or later)  
- **npm** (or **yarn**)  
- **Vite** (if not already installed)  

### 1 Clone the Repository  
```sh
git clone https://github.com/worthygoober/Task_Management_App
cd task-management-app
```

### 2 Install Dependencies  
```bash
npm install
npm install react-router-dom
npm install @auth0/auth0-react
```

### 4 Start the Development Server
```
npm run dev
```
Your app will be accessible at http://localhost:5173/

## Usage

### 1 Register / Login

    Visit the login page and authenticate using Auth0.

### 2 Managing Tasks

    Add Tasks: Use the task form on the dashboard.
    Edit Tasks: Click the edit button on a task item.
    Delete Tasks: Click the delete button on a task item.

### 3 Viewing Task Details

    Click on a task title to view detailed information on the Task Details page.

### 4 Logout

    Click the Logout button in the navigation bar.

## Built With

    React + TypeScript
    Vite (for fast development)
    Auth0 (authentication)
    React Router (navigation)
    React Context API (state management)

## License

This project is licensed under the MIT License.

## Future Improvements

    🔹 Add task categories for better organization.
    🔹 Implement drag-and-drop task reordering.
    🔹 Improve UI/UX with animations and styling refinements.

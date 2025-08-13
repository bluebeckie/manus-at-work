## Manus Vibe Coding and Pipeline

### Intro

This repo is used to test out vibe coding capabilities of Manus AI. It was first asked to simply build a react todo app from online tutorials. Functions like adding tasks, deleting tasks, tab switching were later added.

This is a simple, yet fully functional, front-end based todo application built using React. It allows users to manage their tasks efficiently with dynamic add, delete, and filtering capabilities. The application demonstrates core React concepts such as state management, component rendering, and event handling.

**Key Functions & Features:**
*   **Add Tasks**: Dynamically add new tasks to the list.
*   **Delete Tasks**: Remove tasks from the list instantly.
*   **Toggle Completion**: Mark tasks as complete or incomplete using checkboxes.
*   **Task Filtering**: Filter tasks to view all, active (unchecked), or completed (checked) tasks.
*   **Dynamic Task Counter**: Displays the number of active tasks remaining.
*   **Empty Initial State**: The task list starts empty on page load or refresh, providing a clean slate for new users.

This entire repository and application were **built and refined with the assistance of Manus AI**.

**Demo URL**: [https://omkafcwy.manus.space](https://omkafcwy.manus.space)

### Script to Set Up Development Environment

To set up the development environment for this project, follow these steps:

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository_url>
    cd todo-app
    ```

2.  **Install dependencies** using pnpm:
    ```bash
    npm install -g pnpm
    pnpm install
    ```

3.  **Start the development server**:
    ```bash
    pnpm run dev
    ```
    The application will be accessible at `http://localhost:5173/` (or another port if 5173 is in use).

4.  **Build for production**:
    ```bash
    pnpm run build
    ```
    This will create a `dist` folder with the production-ready static files.

5.  **Run with Docker** (optional):
    To build and run the application using Docker, ensure you have Docker installed and then run:
    ```bash
    docker build -t react-todo-app .
    docker run -p 80:80 react-todo-app
    ```
    The application will then be accessible via your browser at `http://localhost`.

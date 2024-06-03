# Facebook Clone Frontend

This project is the frontend component of a Facebook Clone, built using React. It provides a user interface for interacting with the backend, including functionalities like creating and reading posts, as well as user authentication.

## Technologies Used

- React
- TypeScript
- Axios
- React Router
- React Redux
- Redux Toolkit
- Auth0
- Tailwind CSS
- React Icons

## Project Setup

### Prerequisites

- Node.js
- npm or yarn

### Setup Instructions

1. **Create React App**

    ```bash
    npx create-react-app facebook-clone --template typescript
    cd facebook-clone
    ```

2. **Install Dependencies**

    ```bash
    npm install axios react-router-dom react-redux @reduxjs/toolkit @auth0/auth0-react react-icons tailwindcss
    # or
    yarn add axios react-router-dom react-redux @reduxjs/toolkit @auth0/auth0-react react-icons tailwindcss
    ```

3. **Tailwind CSS Setup**

    Initialize Tailwind CSS:

    ```bash
    npx tailwindcss init -p
    ```

    Update `tailwind.config.js` and add Tailwind to your CSS:

    ```javascript
    // tailwind.config.js
    module.exports = {
      purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }
    ```

    ```css
    /* src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. **Running the Application**

    ```bash
    npm start
    # or
    yarn start
    ```

## Project Structure

- **src/components**: Contains reusable React components.
- **src/app**: Contains Redux slices and store configuration.
- **src/App.tsx**: Main application component.
- **src/index.tsx**: Entry point for the React application.

## Dependencies

- **Axios**: For making HTTP requests to the backend.
- **React Router**: For handling navigation between different pages.
- **React Redux**: For state management.
- **Redux Toolkit**: For simplifying Redux development.
- **Auth0**: For user authentication.
- **Tailwind CSS**: For styling the application with utility-first CSS classes.
- **React Icons**: For incorporating icons into the application.

## Functionalities

- **User Authentication**: Uses Auth0 to handle user login and authentication.
- **Adding a Post**: Provides a form to input post details and save them to the backend.
- **Fetching Posts**: Retrieves and displays a list of all posts from the backend.

## Key Features

- **Create React App**: Used to create the React application quickly and efficiently.
- **Axios**: Simplifies making HTTP requests to the backend for performing CRUD operations.
- **Tailwind CSS**: Enables writing shorter, clearer, and more concise CSS, improving development speed and maintainability.
- **React**: Facilitates the creation of reusable components, enhancing code reuse and organization.
- **React Router**: Manages navigation between different pages, such as viewing posts and adding a post.
- **React Redux & Redux Toolkit**: Manages application state efficiently and simplifies Redux development.
- **Auth0**: Provides secure and scalable authentication for users logging into the application.
- **React Icons**: Offers a library of icons to enhance the UI.

## Pages and Navigation

- **Home Page**: Displays a list of all posts with options to add new posts.
- **Add Post Page**: Provides a form for adding new post details.
- **Login Page**: Provides user login functionality using Auth0.

## Conclusion

This frontend project for the Facebook Clone provides a user-friendly interface for interacting with posts and managing user authentication. Utilizing modern technologies like React, TypeScript, Axios, Tailwind CSS, React Router, and Auth0 ensures efficient and maintainable code while offering a seamless user experience.

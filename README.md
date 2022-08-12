# Mini-Todo App | A Firebase 9 Subcollections Study

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This Mini-Todo app is a MVP for a Project Management Tool where users can add projects and assign tasks to each project. Both the projects and tasks can be edited/updated and deleted.

## Preview

Image of Site

## Project Specifications

| Behaviour        | Input           | Output  |
| ------------- |:-------------:| -----:|
| User visits projects page while data array is being populated. | N/A | A loading message displays for slower connections |
| User visits projects page when there are no projects input. | N/A | A message: "Sorry, there are no projects to load. Please add your first project." |
| User types project name and selects <Add Project> or 'enter key'| text input: 'React Redux Project'| The loading message and error prompts are replaced with a project button <React Redux Project> |
| user clicks the project button | mouse click | User is routed to a project page with the project name, edit & delete buttons, plus a task list (empty initially) and an <add task> button |

## Setup / Installation Requirements

This project was created with create-react-app.

1. Download the repo and install the dependencies (npm i or yarn add)
2. IMPORTANT: Add .env file to .gitignore if it is not already included
3. Add a .env file with your firestore credentials. `REACT_APP_` is required as a prefix.
4. In your terminal, type npm start to run in developer mode.


## Known Bugs

...

## Support and Contact Details

contact details

## Technologies Used

1. Firebase 9
2. React 18
3. React Router 6


## License

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

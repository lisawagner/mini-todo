import React from 'react'

const Home = () => {
  return (
    <>
      <h1>Firebase 9 Experiment</h1>
      <h2>Goal</h2>
      <p>To learn CRUD operations for Firebase 9 subcollections</p>
      <h2>App Concept</h2>
      <p>For functionality, the user can Create, Read, Update and Delete Projects, plus create tasks for each project. The task items are in the 'tasks' subcollection and can also be updated/deleted.</p>
      <h2>Tech</h2>
      <ul>
        <li>Firebase 9</li>
        <li>React Firebase Hooks 5</li>
        <li>React 18</li>
        <li>React Router 6</li>
      </ul>
    </>
  )
}

export default Home
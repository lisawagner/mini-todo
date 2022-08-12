import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h1>MINI-TODO | Firebase 9 Experiment</h1>
      <h2>Goal</h2>
      <p>To explore CRUD operations in Firebase 9</p>
      <h2>App Concept</h2>
      <p>For functionality, the user can Create, Read, Update and Delete Projects, plus create tasks for each project. The task items are in the 'tasks' collection and can also be updated/deleted.</p>
      <p><Link to={{ pathname: "https://github.com/lisawagner/mini-todo" }} target="_blank">GitHub Repo</Link></p>
      <h2>Tech</h2>
      <ul>
        <li>Firebase 9</li>
        <li>React 18</li>
        <li>React Router 6</li>
      </ul>
      <h2>Outcomes</h2>
      <p>Initially, I structured the data in a 'one-to-many' relationship similar to what is done in SQL databases. While this approach is valid, the subcollections became difficult to query. Also, if the parent document is deleted, this could orphan the subcollection.</p>
      <p>Refactoring the code to use multiple collections solved the query issues and bugs that were occuring with firestore subcollections. Now there is a projects collection and a tasks collection. The tasks are no longer a subcollection of a specific project. Instead, they are associated to the correct project via a projectId.</p>
      <p>NoSQL databases scale well horizontally, so it is ok to have multiple shallow collections instead of deeply nested data.</p>
    </>
  )
}

export default Home
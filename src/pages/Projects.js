import { Link } from 'react-router-dom'
// firebase
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase'
// components
import ChildrenList from '../components/ChildrenList/ChildrenList';
import AddNew from '../components/AddNew/AddNew';

const Projects = () => {
  // const query = collection(db, 'Projects', 'fSa6pvLax8F0axfx260J', "tasks")
  // slash notation is also ok to use
  // const query = collection(db, "Projects/fSa6pvLax8F0axfx260J/tasks")
  const query = collection(db, "Projects")

  const [docs, loading, error, snapshot] = useCollectionData(query);
  // console.log("Documents: " + docs)

  return (
        <div>
      <h1>Projects</h1>

      {loading && "Loading..."}
      <div>
        {docs?.map(doc => (
          <div key={Math.random()}>
            <div to={`/projects/${doc.name}`}>{doc.name}</div>
            {/* children for each particular document */}
            <ChildrenList path={`Projects/${doc.name}/tasks`}/>
          </div>
        ))}
        <AddNew path="Projects" title="Project" />
      </div>
    </div>
  )
}

export default Projects
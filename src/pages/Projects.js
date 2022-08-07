import { useState, useEffect } from 'react';
// firebase
import { collection, onSnapshot } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase'
// components
import AddNew from '../components/AddNew/AddNew';
import ProjectsList from '../components/ProjectsList/ProjectsList';

const Projects = () => {
  // const query = collection(db, 'Projects', 'fSa6pvLax8F0axfx260J', "tasks")
  // slash notation is also ok to use
  // const query = collection(db, "Projects/fSa6pvLax8F0axfx260J/tasks")

  // const query = collection(db, "Projects")
  // const [docs, loading] = useCollectionData(query);
  // console.log("Documents: ", docs)

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const ref = collection(db, 'Projects')
    setIsPending(true)

    // real time collection data
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      if (snapshot.empty) {
        setError('Sorry, there are no recipes to load at the moment')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach((doc) => {
        results.push({id: doc.id, ...doc.data()})
        })
        setData(results)
        setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsubscribe()
    
  }, [])


  return (
    <div>
      <h1>Projects</h1>
      {isPending && "Loading..."}

      {data && <ProjectsList projects={ data } />}
      <AddNew document="Projects" title="Project" />
    </div>
  )
}

export default Projects
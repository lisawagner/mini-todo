import { useState, useEffect } from 'react'
// firebase
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase'
// components
import AddProject from '../components/AddNew/AddProject';
import ProjectsList from '../components/ProjectsList/ProjectsList';

const Projects = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const ref = collection(db, 'projects')
    setIsPending(true)

    // real time collection data
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      if (snapshot.empty) {
        setError('Sorry, there are no projects to load. Please add your first project.')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach((doc) => {
        results.push({id: doc.id, ...doc.data()})
        })
        setData(results)
        setIsPending(false)
        setError('')
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
      {error && <p className='error'>{error}</p>}
      {data && <ProjectsList projects={ data } />}
      <AddProject database="projects" title="Project" />
    </div>
  )
}

export default Projects
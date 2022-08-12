import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useProjectContext } from '../context/ProjectContext';
// firebase
import { collection, doc, deleteDoc, updateDoc, onSnapshot, getDocs, where, query } from 'firebase/firestore';
import { db } from '../firebase/firebase';
// components
import TaskItem from '../components/TaskItem/TaskItem';
// styles
import styles from './SingleProject.module.css'
import { TbTrash, TbPencil } from "react-icons/tb";
import AddTask from '../components/AddNew/AddTask';

const SingleProject = () => {
  const [tasks, setTasks] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const { id } = useParams()
  const history = useNavigate()
  const { currentProject } = useProjectContext()

  const handleDelete = async () => {
    // delete tasks related to the project first
    const q = query(collection(db, 'tasks'), where('projectId', '==', currentProject[0].id))
    const docSnap = await getDocs(q)

    docSnap.forEach((doc) => {
      deleteDoc(doc.ref)
    })
    // after deleting related tasks, delete project
    const docRef = doc(db, 'projects', currentProject[0].id)
    await deleteDoc(docRef)
    history('/projects')
  }

  const handleEdit = async () => {
    let name
    name = prompt("Enter new name: ", currentProject[0].name)
    if(name === null || name === '') {
      return
    } else {
      const docRef = doc(db, 'projects', currentProject[0].id)
      const payload = { name }
      await updateDoc(docRef, payload)
      history('/projects')
    }
  }

  const handleDeleteTask = async (taskId) => {
    const docRef = doc(db, 'tasks', taskId)
    await deleteDoc(docRef)
  }

  const handleEditTask = async (taskId, taskName) => {
    let name;
    name = prompt("Enter new task: ", taskName)
    if(name === null || name === '') {
      return
    } else {
      const docRef = doc(db, 'tasks', taskId)
      const payload = { name }
      await updateDoc(docRef, payload, { merge: true })
    }
  }

  // Need to get 'tasks' collection!
  useEffect(() => {
    const ref = collection(db, 'tasks')
    setIsPending(true)

    // real time collection data
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      if (snapshot.empty) {
        setError('Sorry, there are no tasks to load at the moment.')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach((doc) => {
        results.push({id: doc.id, ...doc.data()})
        })
        setTasks(results)
        setIsPending(false)
        setError('')
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })
    return () => unsubscribe()
  }, [])

  // create array of tasks assigned to project
  const assignedTasks = tasks ? tasks.filter(task => {
    let assignedToProject = false
    if(currentProject[0].id === task.projectId) {
      assignedToProject = true
    }
    return assignedToProject
  }) : null

  return (
    <div className={styles.sProjectWrap}>
      <div className={styles.sProjectTopBar}>
        <h1>{id}</h1>
        <div className={styles.sProjectBtns}>
          <button onClick={() => handleEdit()}>Edit Project</button>
          <button onClick={() => handleDelete()}>Delete Project</button>
        </div>
      </div>
      <div className={styles.sProjectTaskWrap}>
        <div className={styles.sProjectTaskItem}>

          {error && <p className='error'>{error}</p>}
          {isPending && "Loading..."}
          
          {
            assignedTasks?.length ?
              assignedTasks?.map(task => (
                <div className={styles.taskItemWrap} key={Math.random()}>
                  <div className={styles.taskItemHeader}><TaskItem data={task.name} id={task.id}/></div>
                  <div className={styles.taskBtnsWrap}>
                    <button onClick={() => handleDeleteTask(task.id)} ><TbTrash /></button>
                    <button onClick={() => handleEditTask(task.id, task.name)}><TbPencil /></button>
                  </div>
                </div>
            )) : <p>Please add a task to your project</p>
          }

        </div>
        <div className={styles.addTaskWrap}>
          <AddTask projectId={currentProject[0].id} database="tasks" title="Task" />
        </div>
        
      </div>

    </div>
  )
}

export default SingleProject
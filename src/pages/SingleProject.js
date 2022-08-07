import { useParams, useNavigate } from 'react-router-dom'
// firebase
import { collection, doc, deleteDoc, updateDoc, getDoc, getDocs } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';
// components
import AddNew from '../components/AddNew/AddNew'
import TaskItem from '../components/TaskItem/TaskItem';
// styles
import styles from './SingleProject.module.css'
import { TbTrash, TbPencil } from "react-icons/tb";

// redo to use doc.id
const SingleProject = () => {
  const { id } = useParams()
  const history = useNavigate()

  const path = `Projects/${id}/tasks`
  const query = collection(db, path)
  const [tasks, loading ] = useCollectionData(query);


  const handleDelete = async (id) => {
    const docRef = doc(db, "Projects", id)
    await deleteDoc(docRef)
    history('/projects')
  }
 
  
  const handleDeleteTask = async (task, id) => {
    // const docRef = doc(db, "Projects", "New Project/tasks/Alpha Task")
    const taskRef = `${id}/tasks${task}`
    const docRef = doc(db, "Projects", taskRef)
    await deleteDoc(docRef)

    console.log(taskRef);
  }
 // BUG - editing the task name changes the pathname, but the doc.id is the old name
  const handleEditTask = async (task, id) => {
    // const name = prompt("Enter new task: ")

    // const taskRef = `${id}/tasks${task}`
    // const docRef = doc(db, "Projects", taskRef)
    // const payload = { name }

    // await updateDoc(docRef, payload)

    console.log('task: ' + task);
    // console.log('handleEdit for: ' + taskRef);


  }


  console.log('Path: ', path);

  return (
    <div className={styles.sProjectWrap}>
      <div className={styles.sProjectTopBar}>
        <h1>{id}</h1>
        <div>
          <button onClick={() => handleDelete(id)}>Delete Project</button>
        </div>
        
      </div>
      <div className={styles.sProjectTaskWrap}>
        <div className={styles.sProjectTaskItem}>
          {loading && "Loading..."}
          {tasks?.map(task => (
            <div className={styles.taskItemWrap} key={Math.random()}>
              <div className={styles.taskItemHeader}><TaskItem data={task.name}/></div>
              <div className={styles.taskBtnsWrap}>
                <button onClick={() => handleDeleteTask(`/${task.name}`, id)} ><TbTrash /></button>
                <button onClick={() => handleEditTask(`/${task.name}`, id)}><TbPencil /></button>
              </div>
              
            </div>
          ))}
        </div>
        <div className={styles.addTaskWrap}>
          {/* <AddNew path={path} title="Task" /> */}
          <AddNew document="tasks" title="Task" />
        </div>
        
      </div>

    </div>
  )
}

export default SingleProject
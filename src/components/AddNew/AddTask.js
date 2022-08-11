import { addDoc, collection } from "@firebase/firestore";
import { useRef } from "react";
import { db } from "../../firebase/firebase";
// styles
import styles from './AddNew.module.css'

const AddTask = ({ projectId, database, title }) => {
  const name = useRef()

  async function handleSubmit(e) {
    e.preventDefault();

    const collectionRef = collection(db, database)
    const payload = {
      name: name.current.value,
      projectId: projectId
    }
    
    // grab document id
    const docRef = await addDoc(collectionRef, payload)
    // console.log(docRef.id)
    e.target.reset();
    
  }
  return (
    <>
      <div className={styles.addNewWrap}>
        <form onSubmit={handleSubmit}>
          <input ref={name}/>
          <button type="submit">Add {title}</button>
        </form>
      </div>
  </>
  )
}

export default AddTask
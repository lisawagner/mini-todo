import { addDoc, collection } from "@firebase/firestore";
import { useRef, useState } from "react";
import { db } from "../../firebase/firebase";
// styles
import styles from './AddNew.module.css'

const AddTask = ({ projectId, database, title }) => {
  const [inputError, setInputError] = useState(null)
  const name = useRef()

  async function handleSubmit(e) {
    e.preventDefault();

    if(!name.current.value) {
      setInputError("Please enter a task name");
    } else {
      const collectionRef = collection(db, database)
      const payload = {
        name: name.current.value,
        projectId: projectId
      }
      setInputError("")
      // grab document id
      const docRef = await addDoc(collectionRef, payload)
      // console.log(docRef.id)
      e.target.reset();
    }
  }

  return (
    <>
      <div className={styles.addNewWrap}>
        <form onSubmit={handleSubmit}>
          <div className={styles.addNewInputWrap}>
            <input ref={name}/>
            <button type="submit">Add {title}</button>
          </div>
          <span>{inputError}</span>
        </form>
      </div>
  </>
  )
}

export default AddTask
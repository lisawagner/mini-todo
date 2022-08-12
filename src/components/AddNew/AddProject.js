import { useRef, useState } from "react";
// firebase
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase/firebase";
// styles
import styles from './AddNew.module.css'

export default function AddProject({ database, title }) {
  const [inputError, setInputError] = useState(null)
  const name = useRef()

  async function handleSubmit(e) {
    e.preventDefault();

    if(!name.current.value) {
      setInputError("Please enter a project name")
    } else {
      const collectionRef = collection(db, database)
      const payload = {
        name: name.current.value
      }
      // grab document id
      const docRef = await addDoc(collectionRef, payload)
      console.log(docRef.id)
      e.target.reset();
    } 
    
  }

  return (
    <div className={styles.addNewWrap}>
      <form onSubmit={handleSubmit}>
        <div className={styles.addNewInputWrap}>
          <input ref={name}/>
          <button type="submit">Add {title}</button>
        </div>
        <span>{inputError}</span>
      </form>
    </div>
  );
}
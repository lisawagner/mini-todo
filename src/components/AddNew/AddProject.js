import { addDoc, collection } from "@firebase/firestore";
import { useRef } from "react";
import { db } from "../../firebase/firebase";
// styles
import styles from './AddNew.module.css'

export default function AddProject({ database, title }) {
  const name = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const collectionRef = collection(db, database)
    const payload = {
      name: name.current.value
    }
    
    // grab document id
    const docRef = await addDoc(collectionRef, payload)
    console.log(docRef.id)
    e.target.reset();
    
  }

  return (
    <div className={styles.addNewWrap}>
      <form onSubmit={handleSubmit}>
        <input ref={name}/>
        <button type="submit">Add {title}</button>
      </form>
    </div>
  );
}
import { doc, setDoc, collection } from "@firebase/firestore";
import { useRef } from "react";
import { db } from "../../firebase/firebase";
// styles
import styles from './AddNew.module.css'

export default function AddNew({ document, title }) {

  const name = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    // API calls
    // const docRef = doc(db, document, name.current.value);
    // await setDoc(docRef, { name: name.current.value });
    // console.log(docRef.id);

    const docRef = doc(collection(db, document))
    const data = {
      name: name.current.value
    }
    await setDoc(docRef, data)

    e.target.reset();
    
  }

  console.log();

  return (
    <div className={styles.addNewWrap}>
      <form onSubmit={handleSubmit}>
        <input ref={name}/>
        <button type="submit">Add {title}</button>
      </form>
    </div>
  );
}
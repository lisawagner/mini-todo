import { doc, setDoc } from "@firebase/firestore";
import { useRef } from "react";
import { db } from "../../firebase/firebase";

export default function AddNew({ path, title }) {
  const name = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    // API calls
    const docRef = doc(db, path, name.current.value);
    await setDoc(docRef, { name: name.current.value });

    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={name} />
        <button type="submit">Add {title}</button>
      </form>
    </div>
  );
}
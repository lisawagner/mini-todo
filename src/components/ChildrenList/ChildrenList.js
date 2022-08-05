import AddNew from '../AddNew/AddNew';
// firebase
import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase/firebase';

export default function ChildrenList({ path }) {
  const query = collection(db, path)
  const [docs, loading, error, snapshot] = useCollectionData(query);
  // note: docs is undefined when first initialized, need ? before mapping

  console.log(docs)
  return (
    <div>
      <ul>
        {loading && "Loading..."}

        {docs?.map(doc => (
          <li key={Math.random()}>{doc.name}</li>
        ))}
        <AddNew path={path} title="Task" />
      </ul>
    </div>
  )
}

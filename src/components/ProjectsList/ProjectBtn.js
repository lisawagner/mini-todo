import { Link } from "react-router-dom"
import styles from './ProjectBtn.module.css'

const ProjectBtn = ({ key, id, name }) => {

  return (
    <div className={styles.projectsItemWrap}>
      <Link to={`/projects/${name}`}>
        <div className={styles.linkWrap}>
          <button>{name}</button>
        </div>
      </Link>
    </div>
  )
}

export default ProjectBtn
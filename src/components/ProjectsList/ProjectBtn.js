import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProjectContext } from "../../context/ProjectContext"
import styles from './ProjectBtn.module.css'

const ProjectBtn = ({ id, name }) => {
  const { setCurrentProject } = useContext(ProjectContext)

  const handleProjectSelect = () => {
    setCurrentProject([{
      id: id,
      name: name}])
    // console.log(id);
  }
  // console.log(currentProject);
  return (
    <div className={styles.projectsItemWrap}>
      <Link to={`/projects/${name}`}>
        <div className={styles.linkWrap}>
          <button onClick={handleProjectSelect}>{name}</button>
        </div>
      </Link>
    </div>
  )
}

export default ProjectBtn
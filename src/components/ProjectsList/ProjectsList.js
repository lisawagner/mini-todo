import ProjectBtn from './ProjectBtn';
// styles
import styles from './ProjectsList.module.css'

const ProjectsList = ({ projects }) => {

  // If array empty, return this template
  if(projects.length === 0) {
    return <div className='error' >No projects to load...</div>
  }

  return (
    <div className={styles.projectsListWrap}>
      {projects?.map((project) => (
        <ProjectBtn
          key={project.id}
          id={project.id}
          name={project.name}
        />
        ))}
    </div>
  )
}

export default ProjectsList
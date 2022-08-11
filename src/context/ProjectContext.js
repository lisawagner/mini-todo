import { createContext, useState, useContext } from 'react'

export const ProjectContext = createContext()
export const useProjectContext = () => useContext(ProjectContext)

const ProjectContextProvider = (props) => {
  const [currentProject, setCurrentProject] = useState("Initial")

  return (
    <ProjectContext.Provider value={{ currentProject, setCurrentProject }}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectContextProvider
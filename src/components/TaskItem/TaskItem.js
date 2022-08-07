// import styles from './TaskItem.module.css'

const TaskItem = ({ data, id }) => {
  return (
    <>
      <button>{data}{id}</button>
    </>
  )
}

export default TaskItem
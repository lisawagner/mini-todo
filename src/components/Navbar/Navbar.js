import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <div className={styles.navWrap}>
      <div>Navigation</div>
      <div className={styles.linkWrap}>
        <NavLink className={styles.linkItem} to="/">
          <span>Home</span>
        </NavLink>
        <NavLink className={styles.linkItem} to="/projects">
          <span>Projects</span>
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar
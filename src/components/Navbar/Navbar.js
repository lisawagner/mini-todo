import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import { TbBrandFirebase } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <div className={styles.navWrap}>
        <div className={styles.firebaseIcon}><TbBrandFirebase /></div>
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
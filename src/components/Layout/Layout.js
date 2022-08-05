import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.pageWrap}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
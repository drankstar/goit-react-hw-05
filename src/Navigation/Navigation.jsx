import { NavLink } from "react-router-dom"
import clsx from "clsx"
import styles from "./Navigation.module.css"

const getClassLink = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.isActive)
}
const Navigation = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink className={getClassLink} to='/'>
          Home
        </NavLink>
        <NavLink className={getClassLink} to='/movies'>
          Movies
        </NavLink>
      </nav>
    </header>
  )
}

export default Navigation

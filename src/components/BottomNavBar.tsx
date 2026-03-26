import { NavLink } from 'react-router-dom';
import styles from './BottomNavBar.module.css';

export function BottomNavBar() {
  return (
    <nav className={styles.navBar}>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}
      >
        <span className="material-symbols-outlined navIcon">home_app_logo</span>
        <span className={styles.navLabel}>Home</span>
      </NavLink>

      <NavLink 
        to="/devices" 
        className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}
      >
        <span className="material-symbols-outlined navIcon">devices</span>
        <span className={styles.navLabel}>Devices</span>
      </NavLink>

      <NavLink 
        to="/settings" 
        className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}
      >
        <span className="material-symbols-outlined navIcon">settings</span>
        <span className={styles.navLabel}>Settings</span>
      </NavLink>
    </nav>
  );
}

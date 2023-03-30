import styles from "./Header.module.css";
import { CiUser } from "react-icons/ci";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import {AiOutlineMenuUnfold} from 'react-icons/ai';
import {FaRegWindowClose} from 'react-icons/fa';
function Header(props) {
  return (
    <div className={styles.Header}>
      <div className={styles.logo}>
        <NavLink to="/dashboard" className={styles.link}>
          <h1>PRODUCT ADMIN</h1>
        </NavLink>
      </div>
      <div className={styles.navContent}>
        <a href="#" className={styles.iconDiv}>
          <AiOutlineDashboard></AiOutlineDashboard>

          <NavLink to="/dashboard" className={styles.link}>
            Dashboard
          </NavLink>
        </a>
        <a href="#" className={styles.iconDiv}>
          <HiShoppingCart></HiShoppingCart>

          <NavLink to="/products" className={styles.link}>
            Products
          </NavLink>
        </a>
        <a href="#" className={styles.iconDiv}>
          <CiUser></CiUser>

          <NavLink to="/Accounts" className={styles.link}>
            Accounts
          </NavLink>
        </a>
      </div>
      <div className={styles.menubar}>
        <div className={styles.menuIcon}><AiOutlineMenuUnfold/></div>
        <div className={styles.closeIcon}><FaRegWindowClose/></div>
      </div>
      {props.login && (
        <div className={styles.logout}>
          <a href="#" className={styles.logout} onClick={props.onLogout}>
            Admin, <b>Logout</b>
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;

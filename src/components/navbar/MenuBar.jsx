import React from "react";

import styles from "./MenuBar.module.css";
import {Link} from "react-router-dom";
import CustomButton from "../button/CustomButton";
import logo from "../../assets/logo.png";

export default function MenuBar({title, userlogo, style}) {
  return (
    <div className={styles.navbar} style={style}>
      <div className={styles.logo}>
        <img src={userlogo || logo} alt="logo" className={styles.logoimg} />
        <h1 className={styles.title}>{title || "Your Company Name"}</h1>
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link to={"/"}>Home</Link>
        </li>
        <li className={styles.item}>
          <Link to={"/about"}>About</Link>
        </li>
        <li className={styles.item}>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li className={styles.item}>
          <Link to={"/blogs"}>Blogs</Link>
        </li>
        <li className={styles.item}>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <Link to={"/book-table"} className={styles.link}>
        <CustomButton btnTxt="Book A Table" />
      </Link>
    </div>
  );
}

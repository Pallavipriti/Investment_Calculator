import logo from "../assets/logo.png";
import styles from "./Header.module.css";

export default function header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

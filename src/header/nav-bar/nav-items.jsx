import { useNavBarItems } from "../helper";
import NavItem from "../nav-item/nav-item";
import styles from "./nav-items.module.css";

export default function NavItems() {
  const navBar = useNavBarItems();
  return (
    <nav className={`${styles.navbar}`}>
      <ul className={`${styles["nav-accordion-list"]}`}>
        {navBar.map((item) => {
          return <NavItem key={item.name} item={{ ...item }} />;
        })}
      </ul>
    </nav>
  );
}

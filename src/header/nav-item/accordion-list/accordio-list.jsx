import styles from "./accordion-list.module.css";

export default function AccordionList({ childrenProp }) {
  return (
    <ul className={`${styles["nav-accordion-list"]}`}>
      {childrenProp.map((item) => {
        return (
          <li
            key={item.name}
            className={`${styles["nav-accordion-list-item"]}`}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

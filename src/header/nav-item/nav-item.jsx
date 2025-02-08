import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import AccordionList from "./accordion-list/accordio-list";

function NavItem({ item }) {
  const [hover, setHover] = useState(false);
  const {
    name = "",
    isAccordion = false,
    children = [],
    isComponent = false,
    to = "",
  } = item;

  function mouseOverHandle() {
    setHover(true);
  }
  function mouseOutHandle() {
    setHover(false);
  }

  return isComponent ? (
    <li key={item.name}>{item.component}</li>
  ) : (
    <>
      <Link
        to={to}
        onMouseEnter={mouseOverHandle}
        onMouseLeave={mouseOutHandle}
      >
        <div className={`${styles["header-nav-list-item"]}`}>
          {name}
          {isAccordion ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={`${styles["accordion-icon"]} ${hover ? styles["accordion-icon-hover"] : ""} `}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          ) : null}
        </div>

        {isAccordion && hover ? (
          <AccordionList childrenProp={children} />
        ) : null}
      </Link>
    </>
  );
}

export default NavItem;

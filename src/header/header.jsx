import "./header.css";
import LogoImage from "./logo-img/logo-img";
import NavItems from "./nav-bar/nav-items";

function Header() {
  return (
    <header className="header">
      <LogoImage />
      <NavItems />
    </header>
  );
}

export default Header;

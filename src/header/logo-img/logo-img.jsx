import styles from "./logo-img.module.css";

export default function LogoImage() {
  return (
    <div>
      <img
        className={`${styles["logo-img"]}`}
        alt="Your Chemical Marketplace"
        src="/images/logo.jpg"
      />
    </div>
  );
}

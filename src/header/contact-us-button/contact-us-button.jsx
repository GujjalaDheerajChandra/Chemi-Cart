import { Link } from "react-router-dom";
import "./contact-us-button.css";

function ContactUsButton({ to }) {
  return (
    <Link to={to}>
      <button type="button" className="contact-us-btn">
        Contact Us
      </button>
    </Link>
  );
}

export default ContactUsButton;

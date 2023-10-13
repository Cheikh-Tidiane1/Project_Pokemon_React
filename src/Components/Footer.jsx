import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav>
        <ol className="footer">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`MentionsLegales`}>Mentions légales</Link>
          </li>
          <li>
            <Link to={`ErrorPage`}>404</Link>
          </li>
        </ol>
      </nav>
    </footer>
  );
}

export default Footer;

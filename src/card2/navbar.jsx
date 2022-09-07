import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <span>12 Aug 2016</span>
        <div className="icons">
          <FontAwesomeIcon icon={faBookmark} color="#fff" size="xs" />

          <FontAwesomeIcon icon={faHeart} color="#fff" size="xs" />
          <FontAwesomeIcon icon={faComment} color="#fff" size="xs" />
        </div>
      </nav>
    </>
  );
}

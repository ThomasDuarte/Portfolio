import { Link } from "react-scroll";

const ScrollLink = ({ to, offset, children }) => (
  <Link
    to={to}
    smooth={true}
    offset={offset}
    duration={150}
    spy={true}
    activeClass="active"
    className="cursor-pointer"
  >
    {children}
  </Link>
);

export default ScrollLink;

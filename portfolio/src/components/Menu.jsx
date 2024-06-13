// Menu.jsx
import { Link as ScrollLink } from "react-scroll";

function Menu({ isMenuOpen, navLinks }) {
  return (
    <ul
      className={`${
        isMenuOpen
          ? "translate-x-0 sm:translate-x-0"
          : "translate-x-full sm:translate-x-0"
      } transition-all duration-500 ease-in-out text-center pt-5 sm:pt-auto space-y-3 sm:space-y-0 sm:pt-auto z-50 sm:flex sm:space-x-8 fixed sm:static w-1/2 right-0 sm:w-auto h-full sm:h-auto pb-2 sm:p-0 bg-white sm:bg-transparent overflow-visible`}
    >
      {navLinks.map((link) => (
        <li
          key={link.name}
          className="transform transition-transform duration-500 hover:scale-125 text-xl font-semibold text-black hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <ScrollLink to={link.href} offset={-60}>
            {link.text}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
}

export default Menu;

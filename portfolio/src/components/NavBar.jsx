import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const SocialIcon = ({ href, classIcon, viewBox, svgPath }) => (
    <a
      href={href}
      role="button"
      className="transform transition-transform duration-500 hover:scale-125"
    >
      <span className={classIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
          <path d={svgPath} />
        </svg>
      </span>
    </a>
  );
  const navLinks = [
    { name: "home", text: "Home", href: "home" },
    { name: "skills", text: "Skills", href: "skills" },
    { name: "projects", text: "Projects", href: "projects" },
    {
      name: "musicProduction",
      text: "Musics",
      href: "musicProduction",
    },
    { name: "contact", text: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (typeof document !== "undefined") {
      document.body.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.body.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  return (
    <nav
      className={
        scrolled
          ? "flex justify-between items-center py-2 px-4 sm:px-8 bg-white shadow-sm fixed top-0 left-0 right-0 z-50 transition duration-500 ease-in-out"
          : "flex justify-between items-center py-4 px-4 sm:px-8 bg-white shadow-sm"
      }
    >
      <div className="flex items-center space-x-2 sm:space-x-4">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:animate-bounce">
          Thomas Duarte
        </h1>
      </div>
      <div className="flex space-x-1 sm:space-x-4">
        {/* Github */}
        <SocialIcon
          href="https://github.com/ThomasDuarte"
          classIcon={"[&>svg]:h-6 sm:h-7 [&>svg]:w-7 [&>svg]:fill-[#333]"}
          viewBox={"0 0 496 512"}
          svgPath={
            "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          }
        />
        {/* LinkedIn */}
        <SocialIcon
          href={"https://www.linkedin.com/in/thomas-duarte1301/"}
          classIcon={"[&>svg]:h-6 sm:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]"}
          viewBox={"0 0 448 512"}
          svgPath={
            "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
          }
        />
        {/* Instagram */}
        <SocialIcon
          href={"https://www.instagram.com/thomasdrt13/"}
          classIcon={"[&>svg]:h-6 sm:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]"}
          viewBox={"0 0 448 512"}
          svgPath={
            "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          }
        />
        {/* X */}
        <SocialIcon
          href={"https://twitter.com/thomasdrt13"}
          classIcon={"[&>svg]:h-6 sm:h-7 [&>svg]:w-7 [&>svg]:fill-black"}
          viewBox={"0 0 512 512"}
          svgPath={
            "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          }
        />
      </div>
      <div className="sm:flex sm:space-x-8" ref={menuRef}>
        <button
          className="sm:hidden align-middle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <GiHamburgerMenu
            className={`h-7 w-7 transition-transform duration-200 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
          />
        </button>
        <Menu isMenuOpen={isMenuOpen} navLinks={navLinks} />
      </div>
    </nav>
  );
}

import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - 100; // offset for navbar
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          currentSection = id;
        }
      });

      // Force contact active at bottom
      if (scrollY + windowHeight >= docHeight - 5) {
        currentSection = "contact";
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleClick = (sec) => {
    const element = document.getElementById(sec);
    if (!element) return;

    const navHeight = 80; // navbar height
    const topPos = Math.max(element.offsetTop - navHeight, 0); // avoid negative scroll

    window.scrollTo({
      top: topPos,
      behavior: "smooth",
    });

    setActive(sec);
    setOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="text-white font-bold text-lg">Shashank Baxi</span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300">
          {sections.map((sec) => (
            <li key={sec}>
              <span
                onClick={() => handleClick(sec)}
                className={`cursor-pointer transition ${
                  active === sec
                    ? "text-indigo-400 font-medium"
                    : "hover:text-white"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-slate-900 animate-[slideDown_0.3s_ease-out]">
          {sections.map((sec) => (
            <li key={sec} className="border-b border-slate-800">
              <span
                onClick={() => handleClick(sec)}
                className="block px-6 py-4 text-slate-300 hover:bg-slate-800 cursor-pointer"
              >
                {sec.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

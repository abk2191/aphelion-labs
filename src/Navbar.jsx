import { Link } from "react-router-dom";

function Navbar({
  isSidebarOpen,
  toggleSidebar,
  hamburgerRef,
  handleThemeToggle,
  currentTheme,
}) {
  return (
    <div className="navbar">
      <button
        ref={hamburgerRef}
        className={`hamburger ${isSidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <button className="theme-switcher" onClick={handleThemeToggle}>
        {currentTheme === "dark" ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </button>

      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="brand-name">
          <h3>
            <i className="fa-solid fa-flask"></i> iINTUIT Labs.
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;

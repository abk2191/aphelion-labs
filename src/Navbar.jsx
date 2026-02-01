import { Link } from "react-router-dom";

function Navbar({
  isSidebarOpen,
  toggleSidebar,
  hamburgerRef,
  handleThemeToggle,
  isDarkTheme,
}) {
  return (
    <div className={`navbar ${isDarkTheme ? "navbar-dark" : ""}`}>
      <button
        ref={hamburgerRef}
        className={`hamburger ${isSidebarOpen ? "open" : ""} ${isDarkTheme ? "hamburger-dark" : ""}`}
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <button onClick={() => handleThemeToggle()}>Dark Theme</button>

      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={`brand-name ${isDarkTheme ? "brand-name-dark" : ""}`}>
          <h3>
            <i className="fa-solid fa-flask"></i> iINTUIT Labs.
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;

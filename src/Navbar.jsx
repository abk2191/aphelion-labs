function Navbar({ isSidebarOpen, toggleSidebar, hamburgerRef }) {
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

      <div className="brand-name">
        <h3>
          <i className="fa-solid fa-flask"></i> XYZee Labs.
        </h3>
      </div>
    </div>
  );
}

export default Navbar;

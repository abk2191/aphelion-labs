import { useEffect, useRef } from "react";

function Sidebar({
  isSidebarOpen,
  shouldRenderSidebar,
  onClose,
  hamburgerRef,
}) {
  const sidebarRef = useRef(null);

  // Handle animation when closing via state change (hamburger button)
  useEffect(() => {
    if (sidebarRef.current) {
      if (isSidebarOpen && shouldRenderSidebar) {
        // Opening
        setTimeout(() => {
          if (sidebarRef.current) {
            sidebarRef.current.classList.add("sidebar-open");
            sidebarRef.current.classList.remove("sidebar-close");
          }
        }, 10);
      } else if (!isSidebarOpen && shouldRenderSidebar) {
        // Closing via state change (hamburger button)
        if (sidebarRef.current) {
          sidebarRef.current.classList.remove("sidebar-open");
          sidebarRef.current.classList.add("sidebar-close");
        }
      }
    }
  }, [isSidebarOpen, shouldRenderSidebar]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isSidebarOpen) return;

      const sidebarEl = sidebarRef.current;
      const hamburgerEl = hamburgerRef.current;

      if (
        sidebarEl &&
        !sidebarEl.contains(event.target) &&
        hamburgerEl &&
        !hamburgerEl.contains(event.target)
      ) {
        // Trigger close animation
        sidebarEl.classList.remove("sidebar-open");
        sidebarEl.classList.add("sidebar-close");

        // Notify parent to close
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, onClose, hamburgerRef]);

  if (!shouldRenderSidebar) return null;

  return (
    <div ref={sidebarRef} className="sidebar">
      <div className="brand-name-sidebar">
        <h3>
          <i className="fa-solid fa-flask"></i> Aphelion Labs.
        </h3>
      </div>
      <div className="sliding-div-container item-style"></div>
    </div>
  );
}

export default Sidebar;

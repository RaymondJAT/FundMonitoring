import { FiChevronsRight, FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = ({
  toggleSidebar,
  isSidebarOpen,
  isSidebarHiddenMobile,
  onLogout,
}) => {
  return (
    <motion.header
      layout
      className="fixed top-0 left-0 right-0 h-12 bg-white border-b border-slate-300 flex items-center px-4 z-20"
      style={{
        marginLeft: isSidebarHiddenMobile
          ? "0"
          : isSidebarOpen
          ? "230px"
          : "70px",
        transition: "margin-left 0.3s ease",
      }}
    >
      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center w-8 h-8 rounded hover:bg-red-100"
      >
        <FiChevronsRight
          className={`transition-transform ${
            isSidebarOpen && !isSidebarHiddenMobile ? "rotate-180" : ""
          }`}
        />
      </button>

      <h1 className="ml-4 text-sm font-semibold">Fund Monitoring System</h1>

      {/* Logout */}
      <button
        onClick={onLogout}
        className="ml-auto flex items-center gap-1 text-red-600 hover:text-red-800"
      >
        <FiLogOut /> Logout
      </button>
    </motion.header>
  );
};

export default Header;

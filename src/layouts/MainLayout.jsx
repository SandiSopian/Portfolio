import PropTypes from "prop-types";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar tetap di atas */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Konten utama yang bisa di-scroll */}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

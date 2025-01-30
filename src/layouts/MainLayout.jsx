import PropTypes from "prop-types";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-indigo-600 bg-cover w-svw h-svh">
      <Navbar>{children}</Navbar>
    </div>
  );
};

// untuk memvalidasi children yang diterima oleh MainLayout
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

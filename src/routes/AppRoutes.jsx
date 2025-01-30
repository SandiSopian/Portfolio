import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import WorkPage from "../pages/WorkPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="work" element={<WorkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

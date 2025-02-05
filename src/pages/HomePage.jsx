import MainLayout from "../layouts/MainLayout";
import QuotesFetcher from "../hooks/QuotesFetcher";
// import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <MainLayout>
      <QuotesFetcher />

      {/* Deskripsi singkat */}
      {/* <div className="flex flex-col md:items-center justify-center h-screen text-white px-4 ml-24 md:ml-0 gap-3">
        <h1 className="text-5xl md:text-7xl md:-ml-6">Hello!</h1>

        <p className="text-pretty max-w-sm">
          {"I'm a creative developer based in Indonesia. I have a passion for web development and love to create new things. I'm currently working as a freelance developer and looking for new opportunities."}
        </p>

        <NavLink to="/work" className="text-blue-400 hover:underline lg:ml-72">
          View works &gt;
        </NavLink>
      </div> */}
    </MainLayout>
  );
};

export default HomePage;

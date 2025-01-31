import MainLayout from "../layouts/MainLayout";
import { about } from "../services/database";
const AboutPage = () => {
  const { profileImg, profileDescription } = about;
  return (
    <MainLayout>
      <div className="flex flex-col h-svh text-white px-4 ml-24 md:ml-36 mt-6 md:mt-16 md:mt-0 gap-3">
        <h1 className="text-4xl md:text-8xl">About</h1>
        <h2>{"-- A little bit about me"}</h2>

        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="my-3 md:my-0 md:w-1/4 xl:1/6">
            <img src={profileImg} alt="profile image" className="w-40 md:w-80 xl:w-100" />
          </div>
          <div className="md:w-3/4 xl:w-5/6">
            <p className="text-pretty">{profileDescription}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;

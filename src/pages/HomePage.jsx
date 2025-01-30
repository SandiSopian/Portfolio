import { NavLink } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col md:items-center justify-center h-screen text-white px-4 ml-24 md:ml-0 gap-3">
        <h1 className="text-4xl md:text-7xl md:-ml-6">안녕하세요!</h1>

        <p className="text-pretty max-w-sm">{"저는 인도네시아에 거주하는 창의적인 개발자입니다. 저는 웹 개발에 대한 열정이 있고 새로운 것을 만드는 것을 좋아합니다. 저는 현재 프리랜서 개발자로 일하고 있으며 새로운 기회를 찾고 있습니다."}</p>

        <NavLink to="/work" className="text-blue-400 hover:underline lg:ml-72">
          작품 보기 &gt;
        </NavLink>
      </div>
    </MainLayout>
  );
};

export default HomePage;

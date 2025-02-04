import MainLayout from "../layouts/MainLayout";
import { project } from "../services/database";

const WorkPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row h-svh text-white px-4 ml-24 md:ml-36 mt-6 md:mt-16 gap-3">
        <div className="md:basis-1/6">
          <h1 className="text-4xl md:text-8xl">Work</h1>
          <h2>{"-- Selected projects"}</h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:mt-48 md:basis-5/6">
          {project.map((project, index) => (
            <div key={index} className={`relative ${index % 2 !== 0 ? "row-span-1 md:-mt-32" : "md:mt-0 md:mb-8"}`}>
              <h3 className="mb-2 hover:text-gray-300 hover:underline cursor-pointer">{project.projectTitle}</h3>

              <div className="max-w-md mb-6">
                <div className="relative overflow-hidden">
                  <img src={project.projectImage} alt={project.projectTitle} className="w-full h-auto object-cover cursor-pointer transition duration-500 hover:scale-110" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default WorkPage;

import Card from "./Card/Card";
const CategoryFeed = ({ projects, category }) => {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {projects.filter((project) => project.category === category) ? (
        projects
          .filter((project) => project.category === category)
          .map((project, index) => <Card key={index} project={project} />)
      ) : (
        <h1 className="text-white text-center text-3xl font-medium">
          No Videos Found
        </h1>
      )}
    </div>
  );
};

export default CategoryFeed;

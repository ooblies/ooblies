import ProjectCard from "./ProjectCard";
import projects from "./projects";

function App() {

  return (
    <div className="select-none pb-16">
      <div className="font-bold text-5xl text-center p-16">
        Ooblies.com!
      </div>
      <div className="font-bold text-2xl text-center p-4">
        Projects
      </div>
      <div className="grid grid-cols-3 auto-rows-max gap-4 max-w-screen-xl mx-auto ">
        { 
          projects.map((p) => <ProjectCard key={p.title} project={p}/>)
        }
      </div>
    </div>
  );
}

export default App;

import { ProjectList } from "@/config/project"
import ProjectCard from "@/components/project-card"

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="container relative z-10 grid items-center gap-6 pb-8 pt-20  md:py-10"
    >
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl">
        Projects
      </h1>
      <div className="flex flex-col items-baseline justify-center gap-4 md:flex-row md:gap-8">
        {ProjectList.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  )
}

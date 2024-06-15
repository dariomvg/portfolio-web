"use client"
import Image from "next/image";
import "../styles/projects.css";
import imgProject from "@/assets/icons/projects.svg";
import { CardProject } from "./CardProject";
import { projects as utilsProjects } from "@/utils/projects";
import { lenguages } from "@/utils/lenguages";
import { useContextLenguage } from "@/contexts/ContextLenguage";

export const Projects = () => {
  const {lenguage} = useContextLenguage(); 
  const { projects } = lenguages[lenguage];

  return (
    <section className="section-projects" id="proyectos">
      <div className="container-title-projects">
        <Image src={imgProject} width={30} height={30} alt="image code" className="img-title" loading="lazy" />
        <h2 className="title-projects">{projects}</h2>
      </div>

      <section className="section-cards-projects">
        {utilsProjects.map((project) => <CardProject key={project.id} project={project} />)}
      </section>
    </section>
  );
};

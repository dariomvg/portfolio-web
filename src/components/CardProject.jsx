"use client";
import iconArrow from "@/assets/icons/arrow-project.svg";
import { lenguages } from "@/utils/lenguages";
import { useContextLenguage } from "@/contexts/ContextLenguage";
import Image from "next/image";

export const CardProject = ({ project }) => {
  const { image, icon1, icon2, icon3, title, link, repo } = project;
  const {lenguage} = useContextLenguage(); 
  const { repository, visit } = lenguages[lenguage];

  return (
    <article className="card-project">
      <div className="container-card">
        <Image
          src={image}
          width={300}
          height={200}
          alt="image project"
          title="titulo"
          className="image-project"
          loading="lazy"
        />
        <div className="details-project">
          <h2 className="title-card-project">{title}</h2>
          <div className="container-icons-tech">
            <Image
              src={icon1}
              width={25}
              height={25}
              alt="icon project"
              title="titulo"
              className="icon-project"
              loading="lazy"
            />
            <Image
              src={icon2}
              width={25}
              height={25}
              alt="icon project"
              title="titulo"
              className="icon-project"
              loading="lazy"
            />
            <Image
              src={icon3}
              width={25}
              height={25}
              alt="icon project"
              title="titulo"
              className="icon-project"
              loading="lazy"
            />
          </div>
          <div className="container-btn-projects">
            <a href={repo} target="_blank" className="link-visit" rel="noopener noreferrer">
              {repository}
              <Image
                src={iconArrow}
                width={20}
                height={20}
                alt="icon arrow"
                title="titulo"
                className="icon-arrow"
                loading="lazy"
              />
            </a>
            <a href={link} target="_blank" className="link-visit" rel="noopener noreferrer">
              {visit}
              <Image
                src={iconArrow}
                width={20}
                height={20}
                alt="icon arrow"
                title="titulo"
                className="icon-arrow"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

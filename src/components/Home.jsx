"use client";
import iconGithub from "@/assets/icons/github.svg";
import iconLinkedin from "@/assets/icons/linkedin.svg";
import Image from "next/image";
import "../styles/home.css";
import { ButtonCV } from "./ButtonCV";
import { useContextLenguage } from "@/contexts/ContextLenguage";
import { lenguages } from "@/utils/lenguages";

export const Home = () => {
  const {lenguage} = useContextLenguage(); 
  const { subtitle, detail } = lenguages[lenguage];
  return (
    <section className="section-home">
      <div className="container-titles">
        <h1 className="title-home">Dario Martinez</h1>
        <h2 className="subtitle-home">{subtitle}</h2>
        <p className="text-home">{detail}</p>
        <div className="container-btns">
          <div className="container-links-contacts">
            <a href="https://github.com/dariomvg" target="_blank" className="link-contact" rel="noopener noreferrer">
              <Image
                src={iconGithub}
                width={25}
                height={25}
                alt="icon github"
                loading="lazy"
              />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/dariomvg/" target="_blank" className="link-contact" rel="noopener noreferrer">
              <Image
                src={iconLinkedin}
                width={25}
                height={25}
                alt="icon linkedin"
                loading="lazy"
              />
              Linkedin
            </a>
          </div>
          <ButtonCV />
        </div>
      </div>
    </section>
  );
};

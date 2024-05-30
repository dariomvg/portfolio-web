"use client";
import Image from "next/image";
import imgSkills from "@/assets/icons/skills.svg";
import "../styles/skills.css";
import { useContextLenguage } from "@/contexts/ContextLenguage";
import { lenguages } from "@/utils/lenguages";
import {skills as utilsSkills} from "@/utils/skills";

export const Skills = () => {
  const {lenguage} = useContextLenguage(); 
  const { skills, other } = lenguages[lenguage];
  return (
    <section className="section-skills" id="habilidades">
      <div className="container-titles-skills">
        <Image src={imgSkills} width={30} height={30} alt="image skills" loading="lazy" />
        <h2 className="title-skills">{skills}</h2>
      </div>
      <div className="container-skills">
        <div className="container-icons">
          <h3 className="title-icons">Front-end</h3>
          <ul className="list">
            {utilsSkills.front.map((item) => (
              <li className="item" key={item.id}>
                <p className="title-item">{item.title}</p>
                <Image
                  src={item.icon}
                  width={30}
                  height={30}
                  alt="image skills"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="container-icons">
          <h3 className="title-icons">Back-end</h3>
          <ul className="list">
            {utilsSkills.back.map((item) => (
              <li className="item" key={item.id}>
                <p className="title-item">{item.title}</p>
                <Image
                  src={item.icon}
                  width={30}
                  height={30}
                  alt="image skills"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="container-icons">
          <h3 className="title-icons">{other}</h3>
          <ul className="list">
            {utilsSkills.others.map((item) => (
              <li className="item" key={item.id}>
                <p className="title-item">{item.title}</p>
                <Image
                  src={item.icon}
                  width={30}
                  height={30}
                  alt="image skills"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

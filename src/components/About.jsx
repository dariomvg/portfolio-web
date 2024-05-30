"use client";
import imgAbout from "@/assets/icons/aboutme.svg";
import Image from "next/image";
import "../styles/about.css";
import { ButtonCV } from "./ButtonCV";
import { lenguages } from "@/utils/lenguages";
import { useContextLenguage } from "@/contexts/ContextLenguage";

export const About = () => {
  const {lenguage} = useContextLenguage(); 
  const { about, detailsAbout, subtitleAbout } = lenguages[lenguage];

  return (
    <section className="section-about" id="sobremi">
      <div className="container-title-about">
        <Image
          src={imgAbout}
          width={30}
          height={30}
          alt="image code"
          className="img-title"
          loading="lazy"
        />
        <h2 className="title-about">{about}</h2>
      </div>

      <section className="section-details">
        <h2 className="title-details">{subtitleAbout}</h2>
        <p className="about-details">
          {detailsAbout}
        </p>

        <ButtonCV />
      </section>
    </section>
  );
};

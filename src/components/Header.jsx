"use client";
import Image from "next/image";
import menu from "@/assets/icons/menu.svg";
import { useState } from "react";
import { useContextLenguage } from "@/contexts/ContextLenguage";
import { lenguages } from "@/utils/lenguages";
import "../styles/header.css";

export const Header = () => {
  const [active, setActive] = useState(false);
  const { lenguage, setChangeLenguage, changeLenguage } = useContextLenguage();
  const { main, projects, skills, about } = lenguages[lenguage];
  const handleMenu = () => setActive(!active);

  const handleLenguage = () => setChangeLenguage(!changeLenguage);

  return (
    <header className={`header ${active && "active"}`}>
      <div className="container-menu-responsive">
        <a
          href="#"
          className="link-nav"
          rel="noopener noreferrer"
          target="_blank">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="logo"
            title="logo"
            className="icon-logo"
            loading="lazy"
          />
        </a>
        <Image
          src={menu}
          width={50}
          height={50}
          alt="menu"
          className="icon-menu"
          onClick={handleMenu}
          loading="lazy"
        />
      </div>
      <nav className="navbar">
        <div className="container-links">
          <a href="#" className="link-nav" rel="noopener noreferrer">
            {main}
          </a>
          <a href="#proyectos" className="link-nav" rel="noopener noreferrer">
            {projects}
          </a>
          <a href="#habilidades" className="link-nav" rel="noopener noreferrer">
            {skills}
          </a>
          <a href="#sobremi" className="link-nav" rel="noopener noreferrer">
            {about}
          </a>
          <button className="select-lenguage" onClick={handleLenguage}>
            {changeLenguage ? "ES" : "EN"}
          </button>
        </div>
      </nav>
    </header>
  );
};

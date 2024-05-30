"use client";
import Image from "next/image";
import menu from "@/assets/icons/menu.svg";
import logo from "@/assets/images/logo.png";
import iconLenguage from "@/assets/icons/lenguage.svg";
import "../styles/header.css";
import { useState } from "react";
import { useContextLenguage } from "@/contexts/ContextLenguage";
import { lenguages } from "@/utils/lenguages";

export const Header = () => {
  const [active, setActive] = useState(false);
  const {handleLenguage, lenguage} = useContextLenguage(); 
  const { main, projects, skills, about } = lenguages[lenguage];
  const handleMenu = () => setActive(!active);

  const handleLanguageChange = (e) => {
    handleLenguage(e.target.value);
  };

  return (
    <header className={`header ${active && "active"}`}>
      <div className="container-menu-responsive">
        <a
          href="#"
          className="link-nav"
          rel="noopener noreferrer"
          target="_blank">
          <Image
            src={logo}
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
          <div className="select-lenguage">
            <Image
              src={iconLenguage}
              width={20}
              height={20}
              alt="lenguages"
              className="icon-lenguage"
              loading="lazy"
            />
            <select value={lenguage} onChange={handleLanguageChange}>
              <option value="es">Spanish</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

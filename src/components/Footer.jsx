"use client"
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import iconReturn from "@/assets/icons/return.svg";
import "../styles/footer.css";
import { lenguages } from "@/utils/lenguages";
import { useContextLenguage } from "@/contexts/ContextLenguage";

export const Footer = () => {
  const {lenguage} = useContextLenguage(); 
  const { titleReturn } = lenguages[lenguage];
  return (
    <footer className="section-footer">
        <div className="container-title-footer">
        <Image src={logo} width={30} height={30} alt="logo" title="logo" loading="lazy" />
        <p className="name-footer">Dario Martinez</p>
        </div>
        <a href="#" className="link-return" rel="noopener noreferrer">
            {titleReturn}
            <Image src={iconReturn} width={20} height={20} alt="icon return" loading="lazy" />
        </a>
    </footer>
  )
}

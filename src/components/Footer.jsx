"use client"
import Image from "next/image";
import iconReturn from "@/assets/icons/return.svg";
import { lenguages } from "@/utils/lenguages";
import { useContextLenguage } from "@/contexts/ContextLenguage";
import "../styles/footer.css";

export const Footer = () => {
  const {lenguage} = useContextLenguage(); 
  const { titleReturn } = lenguages[lenguage];
  return (
    <footer className="section-footer">
        <div className="container-title-footer">
        <Image src="/logo.png" width={30} height={30} alt="logo" title="logo" loading="lazy" />
        <p className="name-footer">Dario Martinez</p>
        </div>
        <a href="#" className="link-return" rel="noopener noreferrer">
            {titleReturn}
            <Image src={iconReturn} width={20} height={20} alt="icon return" loading="lazy" />
        </a>
    </footer>
  )
}

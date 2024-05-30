import "./globals.css";
import "@fontsource/poppins/900.css";
import "@fontsource/inconsolata/200.css";
import LenguageProvider from "@/contexts/ContextLenguage";

export const metadata = {
  icons: { icon: "/icon.png" },
  title: "Dario Martinez - Developer - Programmer",
  description: "Portfolio Web - Web Development - Programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LenguageProvider>{children}</LenguageProvider>
      </body>
    </html>
  );
}

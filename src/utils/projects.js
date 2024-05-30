import imgMovies from "../assets/images/app-movies.png";
import imgNotes from "../assets/images/app-notes.png";
import imgBlog from "../assets/images/app-blog.png";
import imgLanding from "../assets/images/app-landing.png";
import imgCatalogo from "../assets/images/catalogo.png";
import iconReact from "../assets/icons-skills/react.svg";
import iconCss from "../assets/icons-skills/css.svg";
import iconJs from "../assets/icons-skills/javascript.svg";
import iconNext from "../assets/icons-skills/next.svg";
import iconAstro from "../assets/icons-skills/astro.svg";


export const projects = [
  {
    id: 1,
    image: imgMovies,
    icon1: iconNext,
    icon2: iconJs,
    icon3: iconCss,
    title: "Movies App",
    link: "https://app-movies-chi.vercel.app/",
    repo: "https://github.com/dariomvg/movies-app",
  },
  {
    id: 2,
    image: imgLanding,
    icon1: iconAstro,
    icon2: iconJs,
    icon3: iconCss,
    title: "Landing page",
    link: "https://infinity-cloud.vercel.app/",
    repo: "https://github.com/dariomvg/infinityCloud",
  },
  {
    id: 3,
    image: imgCatalogo,
    icon1: iconReact,
    icon2: iconJs,
    icon3: iconCss,
    title: "Components catalog",
    link: "https://components-fast.vercel.app",
    repo: "https://github.com/dariomvg/landing-components-fast",
  },
  {
    id: 4,
    image: imgBlog,
    icon1: iconNext,
    icon3: iconJs,
    icon2: iconCss,
    title: "Blog tech",
    link: "https://blog-tech-sooty.vercel.app/",
    repo: "https://github.com/dariomvg/blog-tech",
  },
  {
    id: 5,
    image: imgNotes,
    icon1: iconReact,
    icon2: iconJs,
    icon3: iconCss,
    title: "Notes app",
    link: "https://notes-kappa-ashy.vercel.app/",
    repo: "https://github.com/dariomvg/notes",
  },
];

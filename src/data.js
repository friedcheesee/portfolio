// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";
import inner from './images/blue.png'; 
import go from './images/go.png'; 
import ff from './images/ff.png'; 
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
export { HeroLight as Light };
export { HeroDark as Dark };
export const githubUsername = "friedcheesee";
export const navLogo = undefined;
export const Blog = <Icon icon="ph:link-bold" />;
export const moreInfo =
  "Under graduate Computer science student with a passion for competitive coding, design, and video editing.";
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="simple-icons:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:sql-query" className="display-4" />,
    name: "SQL",
  },
  {
    id: 7,
    skill: <Icon icon="tabler:brand-cpp" className="display-4" />,
    name: "C++",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="file-icons:go" className="display-4" />,
    name: "Golang",
  },
];


export const resume = null;

export const filteredProjects = ["InnerVerse", "Moes-Bookstore", "VerifyNow"];

export const projectCardImages = [
  {
    name: "InnerVerse",
    image: inner,
  },
  {
    name: "Moes-Bookstore",
    image: go,
  },
  {
    name: "VerifyNow",
    image: ff,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xyyqldeq";

import { DiAndroid, DiTerminal, DiJava, DiHtml5, DiJsBadge, DiReact, DiPython } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
  {
    slug: "Javascript",
    Component: DiJsBadge,
    title: "Javascript",
    Description: () => <>Component development, OOP</>,
  },
  {
    slug: "react",
    Component: DiReact,
    title: "React",
    Description: () => <>Development of UI components</>,
  },
  {
    slug: "Python",
    Component: DiPython,
    title: "Python",
    Description: () => <>Data science and machine-learning projects</>,
  },


  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of webpages</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Queries for data analysis</>,
  },

  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Environment control and manipulation</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Authentication, app testing</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
];

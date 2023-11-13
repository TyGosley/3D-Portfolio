
import { p } from "maath/dist/misc-7d870b3c.esm";
import {
  
  backend,
  frontend,
  database,
  creator,
  projectmanagement,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  jest,
  upliftifyAi,
  metalMindz,
  digitalpp,
  filmfilter,
  profilegen,
  cityweathermon,
  threejs,
  talent,
  collaborating,
  prevail,
  selffit,
  stretchlab,
  boldlyfine,
  ymca,
  stevensonfit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Project Management",
    icon: projectmanagement,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Database Management",
    icon: database,
  },
  {
    title: "Talent Sourcing",
    icon: talent,
  },
  {
    title: "Candidate and Manager Collaboration",
    icon: collaborating,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "jest",
    icon: jest,
  },
  
];

const experiences = [
  {
    title: "Project Manager",
    company_name: "Boldly Fine, LLC",
    icon: boldlyfine,
    iconBg: "#383E56",
    date: "November - Present",
    points: [
      "Strategically orchestrates complex projects by aligning teams, managing resources, and ensuring success through effective communication and collaboration.",
      "Specializing in project coordination, efficient planning, and organization of project activities, budget management, timeline oversight, and fostering a creative and productive team environment.",
      "Identifying mitigating risks, proficiently solving problems, and ensuring the successful delivery of projects despite challenges.",
    ],
  },
  {
    title: "Online Health & Wellness Coach",
    company_name: "Self-employed",
    icon: selffit,
    iconBg: "#383E56",
    date: "March 2012 - Present",
    points: [
      "Designed custom fitness programs tailored to individual clients goals and needs using, data analytics to track progress.",
      "Conducted virtual fitness sessions, utilizing video conferencing, fitness tracking apps, and wearable technology to enhance the coaching experience",
      "Created and managed social media accounts to promote business and attract new clients.",
    ],
  },
  {
    title: "Flexologist",
    company_name: "StretchLab",
    icon: stretchlab,
    iconBg: "#383E56",
    date: "Oct 2021 - Present",
    points: [
      "Deliver one-on-one assisted stretch sessions, encouraging and motivating clients throughout stretch sessions.",
      "Assess clients' movement patterns using unique software and body mapping technologies.",
      "Using technology and databases, create and store all essential client information to provide them with the best possible experience while meeting their individual needs.",
    ],
  },
  {
    title: "Personal, Semi-Private, and Group Trainer",
    company_name: "Prevail Conditioning Performance Center",
    icon: prevail,
    iconBg: "#383E56",
    date: "Mar 2022 - Sept 2022",
    points: [
      "Designed and administered various fitness programs and regimes using the latest fitness technology tools to optimize results.",
      "Utilized wearable technology and data analytics to track progress and customize fitness programs for individual clients.",
      "Employed video conferencing and fitness tracking apps to deliver virtual coaching sessions and enhance the coaching experience.",
      "Utilized unique software and body mapping technologies to assess clients' movement patterns and apply the best program for individuals.",
    ],
  },
  {
    title: "Healthy Living & Sports Director",
    company_name: "Yarrow Family YMCA",
    icon: ymca,
    iconBg: "#383E56",
    date: "Oct 2018 - Aug 2020",
    points: [
      "Created and implemented a budget for the department, utilizing financial analytics tools to forecast and track expenses.",
      "Managed and facilitated the sports programs, utilizing scheduling and communication software tools to optimize the league experience for parents, staff, and vendors.",
      "Coordinated with the Technology Team to develop the online app process, including the implementation of a virtual coaching platform.",
      "Developed and led Y-Fit Programs, utilizing wearable technology and data analytics to track and monitor client progress.",
      "Developed side projects to improve facility layout, including utilizing 3D software modeling and wireframes.",
    ],
  },
  {
    title: "Personal, Semi-Private, and Group Trainer",
    company_name: "Stevenson Fitness",
    icon: stevensonfit,
    iconBg: "#383E56",
    date: "Oct 2014 - Oct 2018",
    points: [
      "Created and implemented a budget for the department, utilizing financial analytics tools to forecast and track expenses.",
      "Managed and facilitated the sports programs, utilizing scheduling and communication software tools to optimize the league experience for parents, staff, and vendors.",
      "Coordinated with the Technology Team to develop the online app process, including the implementation of a virtual coaching platform.",
      "Developed and led Y-Fit Programs, utilizing wearable technology and data analytics to track and monitor client progress.",
      "Developed side projects to improve facility layout, including utilizing 3D software modeling and wireframes.",
    ],
  },
];

const projects = [
  {
    name: "Upliftify AI",
    description:
      "User-centric platform that allows users to enter their current mood and get suggestions for activities to improve or enhance their mood.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: upliftifyAi,
    source_code_link: "https://github.com/TyGosley/upliftify-ai",
    deployed_link: "https://young-fjord-87533.herokuapp.com/",
  },
  {
    name: "Metal Mindz",
    description:
      "MetalMindz is a social app for FRC robot builders. Show off your creations, connect with others, and get inspired. Simply create a profile, upload photos of your robots, and join a community of like-minded enthusiasts.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: metalMindz,
    source_code_link: "https://github.com/mynamebrogrammer/MetalMindz",
    deployed_link: "https://metal-mindz.herokuapp.com/",
  },
  {
    name: "Digital Pencil Pusher",
    description:
      "This application allows the user to write and store notes. The user then has the option to look back at previous notes and can delete unwanted or completed notes.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: digitalpp,
    source_code_link: "https://github.com/TyGosley/digital-pencil-pusher-note-taker",
    deployed_link: "https://afternoon-springs-13154.herokuapp.com/"
  },
  {
    name: "Film Filter",
    description:
      "This application allows the user to search for their favorite movie based on their inputs.  The movie data will be retrieved from the OMDB API and displayed on the page.  The user will also be able to save their favorite movies to the local storage.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: filmfilter,
    source_code_link: "https://github.com/Michaelx626/Film-Filter",
    deployed_link: "https://michaelx626.github.io/Film-Filter/index.html",
  },
  {
    name: "Team Profile Generator",
    description:
      "This simple application allows you to generate a webpage that display's your team's basic info so that you have quick access to their information.",
    tags: [
      {
        name: "jest",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: profilegen,
    source_code_link: "https://github.com/TyGosley/team-profile-generator",
    deployed_link: "https://drive.google.com/file/d/13ZRr9mMGcIVyYjcc97YfvsTegwQ0tO1r/view",
  },
  {
    name: "City Weather Monitor",
    description:
      "The City Weather Monitor will help users find a major city's current weather as well as a 5 day forecast. The weather will display the date, the temperature, wind, and humidity.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "api key",
        color: "pink-text-gradient",
      },
    ],
    image: cityweathermon,
    source_code_link: "https://github.com/TyGosley/city-weather-monitor",
    deployed_link: "https://tygosley.github.io/city-weather-monitor/",
  },
];


export { services, technologies, experiences, projects };

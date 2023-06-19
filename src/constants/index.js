import {
  mobile,
  backend,
  frontend,
  database,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  talent,
  collaborating,
  prevail,
  selffit,
  stretchlab,
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
    id: "contact",
    title: "Contact",
  },
];
// TODO: Change services to your services
const services = [
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
    title: "Content Creator",
    icon: creator,
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
// TODO: Change technologies to your technologies
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "docker",
    icon: docker,
  },
];
// TODO: Change experiences to your work experiences
const experiences = [
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
      "Deliver one-on-one assisted stretch sessions, encouraging and motivating clients throughout stretch sessions",
      "Assess clients' movement patterns using unique software and body mapping technologies.",
      "Using technology and databases, create and store all essential client information to provide them with the best possible experience while meeting their individual needs ",
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
// TODO: take out testimonials if you don't want to use it
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
// TODO: Change projects to your projects
const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

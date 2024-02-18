const aboutInfoData = {
  name: "Mohamed Youssef JEMAI",
  phone: "+216 20 162 470",
  mail: "mohamedyoussef.jemai@gmail.com",
  birthday: "Born January 16, 1998",
  graduation1: "Bachelor Degree in Science of Information Technology ",
  graduation2: "Bachelor Degree in Computer Engineering ",
  address: "Avenue de l'UMA, La Soukra, 2036",
};

const pageAboutData = {
  title: "About me",
  profileImage: "/about/developer-about.png",
};

const profileInfoTabData = {
  title: "I make it a point of honor to achieve my goals",
  description:
    "I specialize in creating intuitive websites with cutting-edge technology, delivering a dynamic and engaging user experience. mainly backend development and the proposal of architecture and optimized solution according to the need",
  languageTitle: "Language Skill",
  languages: "English, French, Arabic",
};

const qualificationTabData = {
  title: "My Awesome Journey",
};
const skillTabData = {
  title: "What i use everyday",
  name: "Skills",
  tools: "Tools",
};

const skillsData = [
  {
    title: "skills",
    data: [
      {
        title: "Languages: ",
        name: " Typescript, JavaScript, HTML, CSS/CSS3, SCSS.",
      },
      {
        title: "Backend Frameworks: ",
        name: "NodeJS (ExpressJS / NestJS).",
      },
      {
        title: "Architecture: ",
        name: "MVC , monolethic architecture, micro service architecture.",
      },
      {
        title: "Frontend Frameworks: ",
        name: "Vue 3, React, NextJS.",
      },
      {
        title: "CSS Frameworks: ",
        name: "Tailwind CSS/UI, CSS 3.",
      },
      {
        title: "Databases: ",
        name: "MySQL, MongoDB, SQLite, PostgreSQL.",
      },
      {
        title: "CMS: ",
        name: "Wordpress.",
      },
      {
        title: "Methodologies: ",
        name: "Agile Software Development.",
      },
      {
        title: "Soft Skills: ",
        name: "Communication, Problem solving, Time management, Leadership, Empathy, Emotional intelligence, Self-managed, Self-organized, Strategic thinking.",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/postgresql.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/docker.svg",
      },
      {
        imgPath: "/about/yaml.svg",
      },
      {
        imgPath: "/about/markdown.svg",
      },
      {
        imgPath: "/about/vercel.svg",
      },
      {
        imgPath: "/about/jira.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];
const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Esprit",
        qualification: "Bachelor Degree in Computer Engineering",
        years: "2019-2022",
      },
      {
        university: "ISET'COM",
        qualification: "Bachelor Degree in Science of Information Technology",
        years: "2016 - 2019",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "RS Technologies",
        role: "Full Stack JS Developer",
        years: "November 2023 - Present",
      },
      {
        company: "Elisys Paris, France",
        role: "Full Stack JS Developer as a Freelancer",
        years: "March 2023 - August 2023",
      },
      {
        company: "Swiss Premium Negoce SA",
        role: "Full Stack JS Developer",
        years: "September 2022 - August 2023",
      },
      // {
      //   company: "Elisys Paris, France",
      //   role: "Full Stack JS Developer",
      //   years: "December 2021 - June 2022",
      // },
      // {
      //   company: "Iset'com, Tunis",
      //   role: "Part-Time Teacher",
      //   years: "September 2021 - December 2022",
      // },
      // {
      //   company: "AlberoIT , Tunis",
      //   role: "Junior project manager",
      //   years: "June 2021 - September 2022",
      // },
      // {
      //   company: "Netcom , Tunis",
      //   role: "Network and telecom intern",
      //   years: "September 2018 - January 2019",
      // },
    ],
  },
];

const TabsCategoriesEnum = [
  {
    label: "Personal info",
    value: "personal",
  },
  {
    label: "Qualification",
    value: "qualifications",
  },
  {
    label: "Skills",
    value: "skills",
  },
];

export default aboutInfoData;
export {
  skillsData,
  qualificationData,
  pageAboutData,
  TabsCategoriesEnum,
  profileInfoTabData,
  qualificationTabData,
  skillTabData,
};

const aboutInfoData = {
  name: "Mohamed Youssef JEMAI",
  phone: "+216 20 162 470",
  mail: "mohamedyoussef.jemai@gmail.com",
  birthday: "Né le 16 Jan, 1998",
  graduation1:
    "Licence en science technologique de l'information et de lé télécommunication",
  graduation2: "Cycle Ingénieur en informatique",
  address: "Avenue de l'UMA, La soukra, 2036",
};

const pageAboutData = {
  title: "About me",
  profileImage: "/about/developer.png",
};

const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "HTML, CSS",
      },
      {
        name: "HTML, CSS",
      },
      {
        name: "HTML, CSS",
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
        imgPath: "/about/notion.svg",
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
        university: "Example University",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        qualification: "Bachelor of Science 2",
        years: "2015 - 2018",
      },
      {
        university: "Another University 3",
        qualification: "Bachelor of Science 2",
        years: "2015 - 2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Example Company",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        company: "Example Company",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        company: "Example Company",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
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
export { skillsData, qualificationData, pageAboutData, TabsCategoriesEnum };

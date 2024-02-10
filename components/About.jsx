import Image from "next/image";
import DevImg from "./DevImg";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";

import PersonalInfo from "./about-tabs/personalInfo";
import Qualifications from "./about-tabs/Qualifications";

// data
import aboutInfoData, {
  skillsData,
  qualificationData,
  pageAboutData,
  TabsCategoriesEnum,
} from "@/shared/data/about.data";
import Skills from "./about-tabs/Skills";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: aboutInfoData.name,
  },
  {
    icon: <PhoneCall size={20} />,
    text: aboutInfoData.phone,
  },
  {
    icon: <MailIcon size={20} />,
    text: aboutInfoData.mail,
  },
  {
    icon: <Calendar size={20} />,
    text: aboutInfoData.birthday,
  },
  {
    icon: <GraduationCap size={20} />,
    text: aboutInfoData.graduation1,
  },
  {
    icon: <GraduationCap size={20} />,
    text: aboutInfoData.graduation2,
  },
  {
    icon: <HomeIcon size={20} />,
    text: aboutInfoData.address,
  },
];

const About = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-20">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          {pageAboutData.title}
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc={pageAboutData.profileImage}
            />
          </div>
          {/* tabs */}
          <div className="flex-1 ">
            <Tabs defaultValue={TabsCategoriesEnum[0].value}>
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                {TabsCategoriesEnum.map((el, index) => (
                  <TabsTrigger
                    key={index}
                    className="w-[162px] xl:w-auto"
                    value={el.value}
                  >
                    {el.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {TabsCategoriesEnum.map((el, index) => (
                  <TabsContent value={el.value} key={index}>
                    {el.value === "personal" ? (
                      <PersonalInfo infoData={infoData} />
                    ) : el.value === "qualifications" ? (
                      <Qualifications infoData={infoData} />
                    ) : (
                      <Skills />
                    )}
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

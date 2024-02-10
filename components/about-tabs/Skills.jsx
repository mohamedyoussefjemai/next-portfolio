import React from "react";

// data
import { skillTabData, skillsData } from "@/shared/data/about.data";
import Image from "next/image";

const Skills = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-8">{skillTabData.title}</h3>
      <div className="mb-16">
        <h4 className="text-xl font-semibold mb-2">{skillTabData.name}</h4>
        <div className="border-b border-border mb-4"></div>
        {/* skills list */}
        <div>
          {getData(skillsData, "skills").data.map((item, index) => {
            const { name } = item;
            return (
              <div className="w-full text-left mx-auto xl:mx-0" key={index}>
                <div className="font-medium">{name}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* tools */}
      <div className="">
        <h4 className="text-xl font-semibold mb-2 xl:text-left">
          {skillTabData.tools}
        </h4>
        <div className="border-b border-border mb-4"></div>
        {/* tools list */}
        <div className="grid lg:grid-cols-10  grid-cols-4 gap-x-8 gap-y-2 justify-center xl:justify-start">
          {getData(skillsData, "tools").data.map((item, index) => {
            const { imgPath } = item;
            return (
              <div key={index}>
                <Image src={imgPath} width={48} height={48} alt="" priority />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

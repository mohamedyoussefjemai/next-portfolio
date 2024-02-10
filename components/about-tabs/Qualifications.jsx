import React from "react";

// data
import { Briefcase, GraduationCap } from "lucide-react";

// data
import {
  qualificationTabData,
  qualificationData,
} from "@/shared/data/about.data";

const Qualifications = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <>
      <div>
        <h3 className="h3 mb-8 text-center xl:text-left">
          {qualificationTabData.title}
        </h3>
        {/* experience & education wrapper */}
        <div className="grid md:grid-cols-2 gap-y-8">
          {/* experience */}
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-4 items-center text-[22px] text-primary">
              <Briefcase />
              <h4 className="capitalize front-medium">
                {getData(qualificationData, "experience").title}
              </h4>
            </div>
            {/* list */}
            <div className="flex flex-col gap-y-8">
              {getData(qualificationData, "experience").data.map(
                (item, index) => {
                  const { company, role, years } = item;
                  return (
                    <div className="flex gap-x-8 group" key={index}>
                      <div className="h-[84px] w-[1px] bg-border relative ml-2">
                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-xl leading-none mb-2">
                          {company}
                        </div>
                        <div className="text-lg leading-none text-muted-foreground mb-4">
                          {role}
                        </div>
                        <div className="text-base font-medium">{years}</div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {/* education */}
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-4 items-center text-[22px] text-primary">
              <GraduationCap size={28} />
              <h4 className="capitalize front-medium">
                {getData(qualificationData, "education").title}
              </h4>
            </div>
            {/* list */}
            <div className="flex flex-col gap-y-8">
              {getData(qualificationData, "education").data.map(
                (item, index) => {
                  const { university, qualification, years } = item;
                  return (
                    <div className="flex gap-x-8 group" key={index}>
                      <div className="h-[84px] w-[1px] bg-border relative ml-2">
                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-xl leading-none mb-2">
                          {university}
                        </div>
                        <div className="text-lg leading-none text-muted-foreground mb-4">
                          {qualification}
                        </div>
                        <div className="text-base font-medium">{years}</div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualifications;

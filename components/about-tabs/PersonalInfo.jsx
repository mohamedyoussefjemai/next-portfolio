import React from "react";

// data
import { profileInfoTabData } from "@/shared/data/about.data";

const PersonalInfo = ({ infoData }) => {
  return (
    <>
      <div className="text-center xl:text-left">
        <h3 className="h3 mb-4">{profileInfoTabData.title}</h3>
        <p className="subtitle max-w-xl max-auto xl:mx-0">
          {profileInfoTabData.description}
        </p>
        {/* icons */}
        <div className="grid xl:grid-cols-2 gap-4 mb-12">
          {infoData.map((item, idx) => {
            return (
              <div
                className="flex items-center gap-x-4 mx-auto xl:mx-0"
                key={idx}
              >
                <div className="text-primary">{item.icon}</div>
                <div>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* languages */}
      <div className="flex flex-col gap-y-2">
        <div className="text-primary">{profileInfoTabData.languageTitle}</div>
        <div className="border-b border-border"></div>
        <div>{profileInfoTabData.languages}</div>
      </div>
    </>
  );
};

export default PersonalInfo;

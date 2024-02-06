import React from "react";

const PersonalInfo = ({ infoData }) => {
  return (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-4">Unmatched Service Quality for over 10 years</h3>
      <p className="subtitle max-w-xl max-auto xl:mx-0">
        I specialize in crafting intuitive websites with cutting-edge
        technologies, delivering dynamic and engaging user experience.
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
  );
};

export default PersonalInfo;

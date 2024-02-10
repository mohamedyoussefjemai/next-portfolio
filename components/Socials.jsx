"use client";

import Link from "next/link";

// icons
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiGitlabFill,
} from "react-icons/ri";

// data
import iconLinks from "@/shared/data/socials.data";

const icons = [
  {
    path: iconLinks.linkedin,
    name: <RiLinkedinFill />,
  },
  {
    path: iconLinks.github,
    name: <RiGithubFill />,
  },
  {
    path: iconLinks.gitlab,
    name: <RiGitlabFill />,
  },
  {
    path: iconLinks.facebook,
    name: <RiFacebookFill />,
  },
  {
    path: iconLinks.instagram,
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

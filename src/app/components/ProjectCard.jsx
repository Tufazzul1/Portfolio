import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, features, clientCode, serverCode }) => {
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const toggleFeaturesVisibility = () => {
    setIsFeaturesVisible(!isFeaturesVisible);
  };
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="flex justify-between mt-3">
        <Link className="btn text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center" href={clientCode}>Client code <FaExternalLinkAlt className=' ml-2 text-blue-300' /></Link>
        <Link className="btn text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center" href={serverCode}> Server code <FaExternalLinkAlt className=' ml-2 text-blue-300' /></Link>
        </div>
        <button
          onClick={toggleFeaturesVisibility}
          className="text-sm text-[#3c19b0] hover:text-white"
        >
          {isFeaturesVisible ? "Hide Features" : "Show Features"}
        </button>
        {isFeaturesVisible && (
          <ul className="mt-2 text-sm text-[#ADB7BE] list-disc pl-5">
            {features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;



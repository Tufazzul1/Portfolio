"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>React</li>
//         <li>JavaScript</li>
//         <li>HTML5</li>
//         <li>CSS3</li>
//         <li>Firebase</li>
//         <li>Node.js</li>
//         <li>Express</li>
//         <li>Mongodb</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Fullstack Academy of Code</li>
//         <li>University of California, Santa Cruz</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>AWS Cloud Practitioner</li>
//         <li>Google Professional Cloud Developer</li>
//       </ul>
//     ),
//   },
// ];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about.pic" width={500} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a frontend developer who loves building interactive and responsive web apps. I have experience with JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS, HTML, CSS, and Git. I learn quickly and always seek to improve my skills. I enjoy working in teams to create great applications.
          </p>
          <h2 className="text-4xl font-bold text-white mb-4 my-5">Education</h2>
          <div className="flex items-center space-x-3">
            <div>
              <Image src="/images/projects/polytechnic.jpeg" alt="Facebook Icon" width={36} height={36} className="rounded-lg mt-1 ml-1" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Diploma in computer technology</h4>
              <h5>Sylhet Polytechnic Institute</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Surveyz Website",
    description: "Surveyz is a web application designed to help users create, manage, and participate in surveys.",
    image: "/images/projects/surveyz-17ed8.web.app_.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://surveyz-17ed8.web.app",
  },
  {
    id: 2,
    title: "A School library website",
    description: "Scholar Net is a web application designed to enhance the experience of finding and exploring books.",
    image: "/images/projects/scholkarNet.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://scholar-net.netlify.app",
  },
  {
    id: 3,
    title: "A travel aggency website",
    description: "Tripify is a comprehensive travel platform designed to provide users with detailed information about travel destinations.",
    image: "/images/projects/tripify-auth-536be.web.app_.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://tripify-auth-536be.web.app/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

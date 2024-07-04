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
    gitUrl: "https://github.com/Tufazzul1/Surveyz-client-side-",
    previewUrl: "https://surveyz-17ed8.web.app",
    features: ["Surveyz provides real-time updates and instant results for surveys, allowing users to see immediate feedback and responses.",
      "The application uses Firebase for secure user authentication, ensuring that only authorized users can access and participate in surveys.",
      "An intuitive admin dashboard allows administrators to manage users, surveys, and survey responses efficiently. This includes creating new surveys, modifying existing ones, and viewing detailed analytics."],
    clientCode: "https://github.com/Tufazzul1/Surveyz-client-side-",
    serverCode: "https://github.com/Tufazzul1/Surveyz-server-side-"

  },
  {
    id: 2,
    title: "A School library website",
    description: "Scholar Net is a web application designed to enhance the experience of finding and exploring books.",
    image: "/images/projects/scholkarNet.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tufazzul1/ScholarNet-client",
    previewUrl: "https://scholar-net.netlify.app",
    features: ["Implement a robust search feature that allows users to search for books by , category. This feature significantly enhances the user experience by helping users find relevant books quickly.",
      "Introduce user authentication to enable features like borrowing books, saving favorites, writing reviews, and accessing personalized recommendations. Users can have their profiles where they can track their borrowing history, manage their favorites, and update their information.",
      "Use algorithms to provide personalized book recommendations based on users' borrowing history, ratings, and preferences. This feature helps users discover new books they might be interested in and encourages them to explore different genres."],
    clientCode: "https://github.com/Tufazzul1/ScholarNet-client",
    serverCode: "https://github.com/Tufazzul1/ScholarNet-server"
  },
  {
    id: 3,
    title: "A travel aggency website",
    description: "Tripify is a comprehensive travel platform designed to provide users with detailed information about travel destinations.",
    image: "/images/projects/tripify-auth-536be.web.app_.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://tripify-auth-536be.web.app/",
    features: ["Provide detailed information about travel destinations, including descriptions, images, attractions, activities, local culture, and travel tips. This feature helps users explore and learn about various places.",
      "Implement a search and filtering system that allows users to search for destinations, flights, hotels, or activities based on specific criteria (e.g., location, date, price, rating). This feature enhances user experience by making it easier to find relevant travel options.",
      "Allow users to book flights, hotels, tours, or other travel-related services directly through the website. This feature often includes integration with payment gateways and confirmation emails."],
    clientCode: "https://github.com/Tufazzul1/Tripify-client",
    serverCode: "https://github.com/Tufazzul1/Tripify-server"
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
              features={project.features}
              clientCode={project.clientCode}
              serverCode={project.serverCode}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

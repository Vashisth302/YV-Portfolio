import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import landingImage from "../../assets/images/Landing.png";
import calcImage from "../../assets/images/calc.png";
import designGenieImage from "../../assets/images/designgenie.png";
import eventImage from "../../assets/images/event.jpeg";

const projects = [
  {
    name: "Adventurous Travel",
    year: "June2024",
    align: "right",
    image: landingImage,
    link: "https://vashisth302.github.io/Codsoft/Task%202/landing%20page.html",
  },
  {
    name: "Calculator",
    year: "July2024",
    align: "left",
    image: calcImage,
    link: "https://vashisth302.github.io/Codsoft/Task%203/Calculator.html",
  },
  {
    name: "DesignGenie",
    year: "Coming soon",
    align: "right",
    image: designGenieImage,
    link: "#",
  },
  {
    name: "StageSetGo",
    year: "Upcoming",
    align: "left",
    image: eventImage,
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;

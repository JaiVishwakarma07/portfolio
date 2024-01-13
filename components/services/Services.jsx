import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus practical apporach to learn
          <br /> and grow
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>About</motion.b> Me
          </h1>
        </div>
        {/* <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Frameworks</motion.b> I worked on.
          </h1>
          
        </div> */}
      </motion.div>
      {/* <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MERN Stack</h2>
          <p>

          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Next.JS</h2>
          <p>

          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>React Native</h2>
          <p>

          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Django</h2>
          <p>

          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MERN Stack</h2>
          <p>

          </p>
          <button>Go</button>
        </motion.div>

      </motion.div> */}
      <div className="listContainer">
        <p>I am <span className="name">Jai Vishwakarma</span> Final Year Master's of Computer Application Student in National Institute of Technology Karnataka.
          Throughout my studies I have built strong problem solving skills with over <span className="name">1000+</span> Questions on various coding platforms and
          also acquired good knowledge of Software Development. These are some Languages and Frameworks I have worked on.
        </p>
        <div className="techs">
          <p><span>Languages : </span> C, C++, JavaScript, TypeScript, Solidity, HTML, CSS, MySQL</p>
          <p><span>Frameworks : </span> ReactJS, NodeJS, ExpressJS, NextJS, SCSS, React Native </p>

        </div>
      </div>
      {/* <div className="listContainer">
        <div className="left">
          <h1>React</h1>
          <h1>React</h1>
          <h1>React</h1>
          <h1>React</h1>
        </div>
        <div className="right">
          <h1>React</h1>
          <h1>React</h1>
          <h1>React</h1>
          <h1>React</h1>
        </div>

      </div> */}
    </motion.div>
  );
};

export default Services;

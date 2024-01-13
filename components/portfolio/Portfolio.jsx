import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Lanci",
    img: "https://clockify.me/blog/wp-content/uploads/2019/04/start-freelancing-cover.png",
    desc: "Lanci is the Ultimate Freelancing Web Application made using MERN Stack in which one can sell and purchase Gigs",
    link: "https://github.com/JaiVishwakarma07/Lanci-FullStack",
    techs: [
      "ReactJS", "ExpressJS", "NodeJS", "MongoDb", "Stripe"
    ]
  },
  {
    id: 2,
    title: "TanStack",
    img: "https://media.sproutsocial.com/uploads/2022/08/Crash-Course-Social-Media-Management_Crash-Course-Social-Media-Management.jpg",
    desc: "TanStack is the Social Media Web Application build using React, Express, Node, MySQL in which you can post status, photos, Videos, Stories, Add Friends Chat with them. Like, Comment, Share and Many more",
    link: "https://github.com/JaiVishwakarma07/Social-Media-Complete",
    techs: [
      "Reactjs", "Express", "Nodejs", "MySQL"
    ]
  },
  {
    id: 3,
    title: "Regex",
    img: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp",
    desc: "Regex is Blog Web Applicaton Build using powerfull Next.js. You and add and rezd Blogs and much more",
    link: "https://github.com/JaiVishwakarma07/regex",
    techs: [
      "NextJS 14", "MongoDb"
    ]
  },
  {
    id: 4,
    title: "BidHub",
    img: "https://d3jlwjv6gmyigl.cloudfront.net/images/2020/10/auct.jpg",
    desc: "BidHub is Ultimate Auction Web Application built using MERN Stack. BidHub uses the real time biding, Timeout for bid, Payment methods and much more",
    link: "https://github.com/JaiVishwakarma07/BidHub",
    techs: [
      "Reactjs", "Express", "Nodejs", "MongoDb", "Stripe", "Socket.IO"
    ]
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="techs">
              {
                item.techs.map((title) => (
                  <span>{title}</span>
                ))
              }
            </div>
            <a className="button" href={item.link} >Github</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

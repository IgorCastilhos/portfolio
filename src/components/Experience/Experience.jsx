import React from 'react';
import {projectExperience, WhatDoIHelp} from "../../utils/data.js";
import css from "./Experience.module.scss";
import {motion} from "framer-motion";
import {fadeIn, staggerContainer, textVariant} from "../../utils/motion.js";

export const Experience = () => {
  return (<section className={css.wrapper}>
    <a className="anchor" id="experiences"></a>
    <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>

      {/* left side */}
      <div className={css.leftSide}>
        {projectExperience.map((exp, i) => {
          return <motion.div variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)} className={css.exp} key={i}>
            <div className="flexCenter" style={{background: exp.bg}}>
              <exp.icon size={25} color="white"/>
            </div>
            <div>
              <span>{exp.name}</span>
              <span className="secondaryText">{exp.projects} Projects</span>
            </div>
          </motion.div>;
        })}
      </div>

      {/* right side */}
      <motion.div
          variants={textVariant(0.5)}
          className={css.rightSide}>

        <span className="primaryText">What do I work on?</span>
        {WhatDoIHelp.map((paragraph, i) => <span className="secondaryText" key={i}>{paragraph}</span>)}

        <div className={`flexCenter ${css.stats}`}>
          <div className={`flexCenter ${css.stat}`}>
            <span className="primaryText">100+</span>
            <span className="secondaryText">Projects Completed</span>
          </div>
          <div className={`flexCenter ${css.stat}`}>
            <span className="primaryText">20+</span>
            <span className="secondaryText">Technologies used</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>);
};


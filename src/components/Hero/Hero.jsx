import React from 'react';
import css from './Hero.module.scss';
import {motion} from "framer-motion";
import {fadeIn, slideIn, staggerContainer} from "../../utils/motion.js";

export const Hero = () => {
  return (
      <section className={`paddings ${css.wrapper}`}>
        <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.25}}
            className={`innerWidth ${css.container}`}>

          {/* UpperElements */}
          <div className={css.upperElements}>

            <motion.span
                variants={fadeIn("right", "tween", 0.2, 1)}
                className="primaryText">

              Hi there, <br/> I'm Igor.
            </motion.span>
            <motion.span
                variants={fadeIn("left", "tween", 0.4, 1)}
                className="secondaryText">
              I'm a <b>Full-Stack Developer</b>,
              <br/>
              mainly focused in Web Development
            </motion.span>
          </div>

          {/* Profile image */}
          <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className={css.person}>
            <motion.img
                variants={slideIn("up", "tween", 0.5, 1.3)}
                src="/igor.png" alt=""/>
          </motion.div>

          {/* email */}
          <a href="mailto:igorcastilhos2010@hotmail.com" className={css.email}>
            igorcastilhos2010@hotmail.com
          </a>

          {/* LowerElements*/}
          <div className={css.lowerElements}>
            <motion.div
                variants={fadeIn("right", "tween", 0.3, 1)}
                className={css.experience}
            >
              <div className="primaryText">2</div>
              <div className="secondaryText">
                <div>
                  Years
                </div>
                <div>Learning About Development</div>
              </div>
            </motion.div>

            <motion.div
                variants={fadeIn("left", "tween", 0.5, 1)}
                className={css.certificate}
            >
              <img src="/certificate.png" alt=""/>
              <span>CERTIFIED PROFESSIONAL</span>
            </motion.div>
          </div>
        </motion.div>
      </section>
  );
};


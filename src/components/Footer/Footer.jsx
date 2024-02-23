import React from 'react';
import {footerVariants, staggerContainer} from "../../utils/motion.js";
import {motion} from "framer-motion";
import css from "./Footer.module.scss"

export const Footer = () => {
  return (
      <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0.25}}
          className={`paddings ${css.wrapper}`}>

        <motion.div
            variants={footerVariants}
            className={`innerWidth yPaddings flexCenter ${css.container}`}>
          <div className={css.left}>
            <span className="primaryText">
              Let's work together. <br/>
              It will be amazing.
            </span>
            <span className="primaryText">
              Start by <a href="mailto:igorcastilhos2010@hotmail.com">saying hi</a>
            </span>
          </div>

          <div className={css.right}>
            <div className={css.info}>
              <span className="secondaryText">Information</span>
              <p>340 Porto Alegre, RS, BRAZIL</p>
            </div>
            <ul className={css.menu}>
              <li>Services</li>
              <li>Works</li>
              <li>Notes</li>
              <li>Experience</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>
  );
};

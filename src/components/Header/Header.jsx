import React, {useState} from 'react';
import css from "./Header.module.scss";
import {BiMenuAltRight, BiPhoneCall} from "react-icons/bi";
import {m, motion} from "framer-motion";
import {getMenuStyles, headerVariants} from "../../utils/motion.js";
import useHeaderShadow from "../../hooks/useHeaderShadow.jsx";

// initial: hidden state
// whileInView: show state
// viewport: shows the animation only once
export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow()
  return (
      <motion.div
          initial="hidden"
          whileInView="show"
          variants={headerVariants}
          viewport={{once: false, amount: 0.25}}
          className={`paddings ${css.wrapper}`}
          style={{boxShadow: headerShadow}}
      >
        <div className={`innerWidth ${css.container} flexCenter `}>
          <div className={css.name}>Igor</div>
          <ul
              style={getMenuStyles(menuOpened)}
              className={`flexCenter ${css.menu}`}>
            <li><a href="">Services</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Portfolio</a></li>
            <li className={`flexCenter ${css.phone}`}>
              <p>+55 (51) 99630-2909</p>
              <BiPhoneCall size={"40px"}/>
            </li>
          </ul>
          {/* for medium and small screens */}
          <div className={css.menuIcon}
               onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30}/>
          </div>

        </div>
      </motion.div>);
};


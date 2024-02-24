import React, {useRef, useState} from 'react';
import css from "./Header.module.scss";
import {BiMenuAltRight, BiPhoneCall} from "react-icons/bi";
import {motion} from "framer-motion";
import {getMenuStyles, headerVariants} from "../../utils/motion.js";
import useHeaderShadow from "../../hooks/useHeaderShadow.jsx";
import useOutsideAlerter from "../../hooks/useOutsideAlerter.jsx";

export const Header = () => {
    const menuRef = useRef(null);
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();

    // Handle click outside of sidebar on mobile
    useOutsideAlerter({
        menuRef,
        setMenuOpened
    });

    // initial: hidden state
    // whileInView: show state
    // viewport: shows the animation only once
    return (
        <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            className={`bg-primary paddings ${css.wrapper}`}
            viewport={{once: true, amount: 0.25}}
            style={{boxShadow: headerShadow}}
        >
            <div className={`innerWidth ${css.container} flexCenter`}>
                <div className={css.name}>Igor</div>
                <ul
                    className={`flexCenter ${css.menu}`}
                    ref={menuRef}
                    style={getMenuStyles(menuOpened)}
                >
                    <li><a href="#experiences">Services</a></li>
                    <li><a href="#work">Experience</a></li>
                    <li><a href="https://github.com/IgorCastilhos" target="_blank">Portfolio</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <a href="tel:+5551996302909">+55 51 99630-2909</a>
                        <BiPhoneCall size={"40px"}/>
                    </li>
                </ul>

                {/* for medium and small screens */}
                <div
                    className={css.menuIcon}
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenuAltRight size={30}/>
                </div>
            </div>
        </motion.div>
    );
};

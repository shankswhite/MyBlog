import React from 'react'

// CSS
import css from './HeaderComponent.module.scss'
import '../../styles/global.scss'

// Icon
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi'

// Animation
import { motion } from 'framer-motion'
// @ts-ignore
import { headerVariants, getMenuStyles } from '../../utils/motion'

// hook
// @ts-ignore
import useHeaderShadow from '../../hooks/useHeaderShadow';


export default function HeaderComponent() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once: false, amount: 0.25}}
    style={{boxShadow: headerShadow}}
    className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          Levon
        </div>

        <ul 
        style={getMenuStyles(menuOpen)}
        className={`flexCenter ${css.menu}`}>
          <li><a href="">Blog</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Resume</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+1 408 218 9166</p>
            <BiPhoneCall size={"40px"}/>
          </li>
        </ul>

        <div className={css.menuIcon}
        onClick={ () => setMenuOpen((prev) => !prev) }
        >
          <BiMenuAltRight size={"30px"}/>
        </div>
      </div>

    </motion.div>
  )
}



import React from 'react'

import css from './HeroComponent.module.scss'
import '../../styles/global.scss'

function HeroComponent() {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <div className={`innerWidth ${css.container}`}>

            <div className={css.upperElements}>
                <span>
                    Hey There, <br />I'm Levon.
                </span>
                <span>
                    I focus on <br />AI and Game Devlopment.
                </span>
            </div>

            <div className={css.lowerElements}>
                <div className={`css.experience`}>
                    <div className="primaryText">3 Years Game Designer</div>
                    <div className="primaryText">1 Year Data Analyst</div>
                </div>
                <div className={css.certificate}>
                    <img src="./certificate.png" alt="" />
                    <span>Certified AWS Cloud Practitioner</span>
                    <span>Passed CFA Level 1 Test</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroComponent
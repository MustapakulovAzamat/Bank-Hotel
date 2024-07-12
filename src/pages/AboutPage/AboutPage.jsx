import React from 'react'
import './about.css'

import aboutBigImage from '../../assets/images/about-images/about-big-image.jpg'

export const AboutPage = () => {
  return (
    <section className='about' id='about'>
        <div className="container">

          <div className="about__content">

            <div className='about__image'>
              <img src={aboutBigImage} alt="img" />
            </div>

            <div className="about__info">
              <div className="about__title">
                <h2 className='title-yel'>About <span className='title'>Us</span></h2>
              </div>
              <div className="about__desc">
                <h4>High quality</h4>
                <span className='text'>
                  The five-star Bank Hotel was reopened to visitors in 2016. The building was renovated and modernized to meet the expectations of the most demanding guests. We offer luxurious rooms, numerous facilities, and exceptional service. 
                </span>
              </div>
            </div>

          </div>

        </div>
    </section>
  )
}

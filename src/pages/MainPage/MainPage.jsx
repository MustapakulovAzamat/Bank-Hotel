import React from 'react'
import './main.css'

import mainImg from '../../assets/images/main-images/main-image.jpg'
import ArrowIcon from '../../assets/images/main-images/main-arrow.png'
import { Navbar } from '../../components/Navbar/Navbar'
import { Button } from '../../components/Button/Button'

export const MainPage = () => {
  return (
    <main className='main'>

      <div className='container'>
        <Navbar/>
        <div className="main__content">
          <div className="main__title">
              <h1 className='title'>Bank <span className='title-yel'>Hotel</span></h1>

              <span className='text-yel'>
                rooms // restaurant // congress hall // wine bar
              </span>
              <div className="line"></div>
          </div>

          <div className="main__buttons">

            <div className="main__button">
              <Button text={'Since 1973'}/>
              <span className='text'>
                The luxurious hotel in the most beautiful European 
                city with an exclusive restaurant, conference-hall, 
                and art-bar.
              </span>
            </div>
            <div className="main__arrow">
              <button><a href="#about"><img src={ArrowIcon} alt="arrow down" /></a></button>
            </div>
          </div>

        </div>

        <div className="main__img">
          <img src={mainImg} alt="main img" />
        </div>

        <div className="main__info">
          <div className="main__num">
            <span className="text-yel"><a href="tel:+38 032 297 50 20">+38 032 297 50 20</a></span>
            <span className="text"><a href="addres">8 Lystopadovoho Chynu,Lviv</a></span>
          </div>

          <div className="main__desc">
            <span className="text">Art & Congress hall</span>
          </div>
        </div>
          
      </div>
    </main>
  )
}

import React from 'react'
import './our.css'
import shefImg from '../../assets/images/our-images/our-shef-image.jpg'
import BartenderImg from '../../assets/images/our-images/our-bartender-image.jpg'
import starIcon from '../../assets/images/main-images/main-star-icon.svg'
import { List } from './list/List'

export const OurPage = () => {
  return (
    <div className='our'>
        <div className="container">
            <div className="our__content">
                <div className="our__left">
                    <div>
                        <h3 className='text'>Art & Congress hall</h3>
                    </div>
                    <div>
                        <img src={shefImg} alt="shef" />
                    </div>
                </div>

                <div className="our__info">
                    <h2 className='title'>Our faci </h2>
                    <div className="our__title">
                        <img src={starIcon} alt="star"/>
                        <h2 className="title">lities</h2>
                    </div>
                    <div className="our__desc">
                        <span className='text'>
                            Bank Hotel offers you a wide range of 
                            additional services and facilities. Visit our restaurant 
                            to try exclusive meals, book a conference hall to organize
                            a business meeting, or relax in the art-bar. 
                        </span>
                    </div>
                </div>

                <div className="our__right">
                    <img src={BartenderImg} alt="bartender" />
                </div>

            </div>     
            <List/>
        </div>
    </div>
  )
}

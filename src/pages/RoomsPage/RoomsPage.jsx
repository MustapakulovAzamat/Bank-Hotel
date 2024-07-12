import React, { useState } from 'react'
import './rooms.css'

import mirrorImg from '../../assets/images/rooms-images/rooms-mirror-image.jpg'
import bedImg from '../../assets/images/rooms-images/rooms-bed-image.jpg'
import { Button } from '../../components/Button/Button'
import { BsArrowRight } from "react-icons/bs";

export const RoomsPage = () => {
    const [count, setCount] = useState(1)
    
    const handleForward = () => {
        if(count === 4) {
            setCount(1)
        }else {
            setCount(count + 1)
        }
    }
  return (
    <section className='rooms'>
        <div className="container">
            <div className="rooms__content">
                <div className="rooms__title">
                    <h2 className='title'>Rooms & apartments</h2>
                    <span className='text'>All room decoration was made with ecological certified and safe materials.</span>
                </div>

                <div className="rooms__info">
                    <div className="rooms__items">
                        <div className="rooms__item">
                            <img className='mirror' src={mirrorImg} alt="mirror" />
                            <div onClick={handleForward}><BsArrowRight/></div>

                        </div>
                        <div className="rooms__item">
                            <Button text={'Since 1973'}/>
                            <div className="rooms__item__desc">
                                <h3 className='title'>Superior twin</h3>
                                <span className='text'>
                                    The Superior twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city. Stylish interior design and comfortable beds will make your stay cozy and pleasant.
                                </span>
                            </div>
                            <div className="rooms__item__count">
                                <span className='text'>0{count} <span> / 04</span> </span>
                            </div>
                        </div>
                    </div>

                    <div className="rooms__image">
                        <img src={bedImg} alt="bed" />
                    </div>

                </div>
            </div>
            <div className="line"></div>
        </div>
    </section>
  )
}

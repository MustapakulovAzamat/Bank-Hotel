import React, { useState } from 'react'
import './list.css'
import { RxArrowRight } from "react-icons/rx";
import { RxArrowDown } from 'react-icons/rx';
import hallImg from '../../../assets/images/our-images/list/list-hall.jpg'
import iceRestaurantImg from '../../../assets/images/our-images/list/list-ice-restaurant.jpg'
import wineBarImg from '../../../assets/images/our-images/list/list-wine-bar.jpg'

export const List = () => {
    const [show, setShow] = useState([false, false, false])

    const handleShow = (index) => {
        setShow(show.map((item, id) => id === index ? !item : item))
    }
    const list = [
        {
            img: iceRestaurantImg, 
            title:'Ice restaurant', 
            text:'The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.'
        },

        {
            img: hallImg , 
            title:'Conference Hall',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, eligendi! Laudantium corrupti provident, nesciunt similique inventore tempore error quisquam eveniet nobis suscipit quis voluptatibus in minus labore minima. Blanditiis ut laborum atque illo nulla repellat eveniet ducimus, at, neque, harum quas fuga. Perferendis totam quis molestias amet culpa, nihil nam?'
        },

        {
            img: wineBarImg, 
            title: 'Wine Bar “Reserve', 
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt maxime repellat nihil, quo expedita beatae at pariatur repudiandae magnam! Aliquam corporis ut quisquam aperiam molestias neque qui reiciendis. Similique voluptate illum consequuntur?'
        }
    ]

  return (
    <div className={`list ${show.some(item => item) ? 'changeList' : ''}`}>
        {list.map((item, index) => (
            <div key={index}>
                <div className="list__item">
                    <div className={`list__item__img ${show[index] ? 'changeImage' : ''}`}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className={`list__item__title ${show[index] ? 'changeTitle' : ''}`}>
                        <h2 className='title'>{`0${index + 1}`}</h2>
                        <h3 className='title'>{item.title}</h3>
                    </div>
                    <div className="list__item__info">
                        <button onClick={() => handleShow(index)} className='title'>
                            <span className={show[index] ? `rotate-down ${show[index] ? 'changeArrow' : ''}` : 'rotate-right'}>
                                {show[index] ? <RxArrowDown /> : <RxArrowRight />}
                            </span>
                        </button>
                    </div>
                </div>

                <div className={`list__desc ${show[index] ? '' : 'hidden'}`}>
                    <span className='text'>{item.text}</span>
                </div>
                <div className="line"></div>
            </div>
        ))}
    </div>
  )
}

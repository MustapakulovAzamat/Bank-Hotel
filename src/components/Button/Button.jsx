import React from 'react'
import './button.css'
import starIcon from '../../assets/images/main-images/main-star-icon.svg'

export const Button = ({text}) => {
  return (
    <div className="button">
        <button>
            <img src={starIcon} alt="star icon" />
            {text}
        </button>
    </div>
  )
}

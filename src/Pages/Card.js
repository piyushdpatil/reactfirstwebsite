import React from 'react'
import Himage from '../Assets/images/img1.jpeg'
import './Card.css';

const Card = (props) => {
    return (
        <div >
            <div className='CDiv'>
                <img src={Himage} alt='home' />
                <h2> {props.title}</h2>
                <p> {props.subTitle}</p>
                <button>Know More</button>
            </div>

        </div>
    )
}
export default Card;
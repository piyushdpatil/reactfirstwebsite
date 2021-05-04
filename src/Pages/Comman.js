import React from 'react'
import './Home.css';
import Himage from '../Assets/images/home.gif'

const Comman = (props) => {
    return (
        <div className='mainD'>
            <div className='Idiv'>
                <img src={props.im} alt='home' />
            </div>
            <div className='Hdiv'>
                <h1>{props.he1}</h1>
                <h1>{props.he2} <span style={{ color: 'rgb(52, 199, 15)' }}>{props.hes}</span> </h1>
                <p>{props.p}</p>
                <button>{props.bt}</button>
            </div>

        </div>
    )
}
export default Comman;
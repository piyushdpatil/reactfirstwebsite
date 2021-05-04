import React from 'react'
import './Home.css';
import Himage from '../Assets/images/Home.gif'
import Comman from './Comman'

const Home = () => {
    return (
        <div >
            <Comman he1="Grow Your business"
                he2='with' hes="Piyush Patil"
                p='I am the freelancer Website and Application developer.'
                bt='Get Started' im={Himage} />
        </div>
    )
}
export default Home;
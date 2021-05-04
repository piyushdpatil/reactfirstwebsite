import React from 'react'
import Comman from './Comman'
import Aimage from '../Assets/images/About.gif'

const About = () => {
    return (
        <div>
            <Comman he1="Welcome to About page"
                he2='' hes="Piyush Patil"
                p='I am the freelancer Website and Application developer.'
                bt='Contact Now' im={Aimage} />
        </div>
    )
}
export default About;
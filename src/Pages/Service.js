import React from 'react'
import Card from './Card'

import Sdata from './Sdata'
const Service = () => {
    return (
        <div className='CMDiv'>
            <h1>Our Service</h1>
            <div className='CardDiv'>

                {Sdata.map((val, index) => {
                    return <Card
                        title={val.title}
                        subTitle={val.subTitle}
                        key={index}
                    />
                })}
            </div>

        </div>
    )
}
export default Service;
import React from 'react'
import Moon from './images/Moon.jpg'


export default function Hobbies() {
    return (
        <div className='container Hobbies'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <img className='Moon-pic' src={Moon} alt='this is a picture of the moon that I took'/>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <h1> Star Gazing </h1>
                    <p> I love star gazing! looking at our Universe though a different lense is always amazing to see! </p>
                </div>
            </div>
        </div>
    )
}
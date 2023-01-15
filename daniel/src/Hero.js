import react from 'react'
import Dan from './images/Daniel_Winn.jpg'
import Logo from './images/1664223925.901021-04F686CA-DB5B-4CE5-878D-74F6E7281126.png'

export default function Hero() {
    return (
        <div>
            <img className='Hero-image' src={Dan} alt="an Image of me!" 
            onMouseOver={e => e.currentTarget.src = Logo}
            onMouseOut={e => e.currentTarget.src = Dan}
            />
            <h1> Hi, Im Daniel Winn! </h1>
        </div>
    )
}
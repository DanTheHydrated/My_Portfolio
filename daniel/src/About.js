import Moon from './images/Moon.jpg'

export default function About() {
    return(
        <div className="container-grid">
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <h1> About me! </h1>
                    <p> I went to school at Eastern Kentucky University for medical Laboratory Sciences, but I realized that feild wasn't for me. I then attended awesome Inc. where I made a project every week for a tottal of three months! I've always loved making things and the Awesome Inc. program helped me realize how I can create things with code!</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className='col-6'>
                    <h3> Some Projects! </h3>
                </div>
            </div>
            <div className="row justify-content-center moon-bar">
                <div className='col-sm-12 col-6'>
                    <img src={Moon} alt='Photo of the moon I took' className='img-fluid float-start MOON' width='300' height='600'/>
                </div>
                <div className='col-sm-12 col-6'>
                    <h3 className='side-moon float-end'> My Hobbies!
                        <p> One of my favorite hobbies is Star Gazing! I love looking through my Telescope and viewing our Universe, I even took the photo to the Right!  </p>
                    </h3>
                </div>
            </div>
        </div>
    )
}
import Moon from './images/Moon.jpg'
import GitHub from './images/Screen Shot 2023-01-17 at 2.31.08 PM.png'
import Danstagram from './images/Screen Shot 2022-12-14 at 10.29.08 AM.png'


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
                <div className='col-4'>
                    <h3> Some Projects! </h3>
                    <div className="card">
                        <img src={GitHub} className="card-img-top" alt="Github profile Page" />
                        <div className="card-body">
                            <h5 className="card-title">Evercraft</h5>
                            <p className="card-text"> built in python and using Test driven development!</p>
                            <a href="https://github.com/DanTheHydrated/evercraftPyython" className="btn btn-primary">Check out tht GitHub!</a>
                        </div>
                    </div>
                    </div>
                    <div className='col-4'>
                    <div className="card">
                        <img src={Danstagram} className="card-img-top" alt="Danstagram profile" />
                        <div className="card-body">
                            <h5 className="card-title">Danstagram </h5>
                            <p className="card-text"> Danstagram was my final project I built for the Awesome Inc. program! </p>
                            <a href="https://danstagram-ad70a.web.app/login" className="btn btn-primary">Check out Danstagram!</a>
                        </div>
                    </div>
                    </div>
                    <div className='col-4'>
                    <div className="card">
                        <img src={GitHub} className="card-img-top" alt="Github profile Page" />
                        <div className="card-body">
                            <h5 className="card-title">Tic-Tac-Toe</h5>
                            <p className="card-text"> Tic-tac-Toe I built in Javascript with a fun twist!</p>
                            <a href="https://github.com/DanTheHydrated/Tic_Tac_Toe" className="btn btn-primary">Check out tht GitHub!</a>
                        </div>
                    </div>
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
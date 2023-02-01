import react from "react";
import email from './images/Email.svg';
import github from './images/Github.svg';
import phone from './images/Phone.svg';
import linkedin from './images/Website.svg';

export default function Contact() {
return(
    <div className="container justify-content-center contacts">
        <h1 className="Contact-Me"> Contact Me! </h1>
        <div className="row justify-content-center">
            <div className="col-3">
                <a href="mailto:r.daniel.winn@gmail.com"><img src={email} alt='send me an email' /></a>
            </div>
            <div className="col-3">
                <a href="https://github.com/DanTheHydrated"><img src={github} alt='check out my GitHub' /></a>
            </div>
            <div className="col-3">
                <a href="https://www.linkedin.com/in/robert-daniel-winn/"><img src={linkedin} alt='check out my Linked In' /></a>
            </div>
        </div>
    </div>
)
}
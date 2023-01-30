import react from "react";
import email from './src/images/Email.svg';
import github from './src/images/Github.svg';
import phone from './src/images/Phone.svg';
import linkedin from './src/images/Website.svg';

export default function Contact() {
return(
    <div className="container justify-content-center">
        <h1 className="">
            Contact Me!
        </h1>
        <img src={email}/>
        <img src={github}/>
        <img src={phone}/>
        <img src={linkedin}/>
    </div>
)
}
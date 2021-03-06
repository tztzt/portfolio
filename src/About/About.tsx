import './About.scss'
// @ts-ignore
import { SocialIcon } from 'react-social-icons';

function About() {
    return (
        <div className="my-row">
                <div className="display-pic">
                    <img className="picture" src={process.env.PUBLIC_URL + '/photo1.jpg'} alt="" />
                </div>
                <div className="about-content">
                    <div className="about-info">
                        Name: Zhi Thon <br />
                        Major: Computer Engineering (Bachelor of Engineering) <br />
                        Graduating: August 2021 
                    </div>
                    <div className="about-me">
                        Young, aspiring developer hoping to better our every day lives one line of code at a time. <br />
                        I am all about the efficiency and optimisation of code and solutions, problem solving is my drug. <br />
                        When I am not hard at work, you can find me chilling on video games, pc games or board games with friends, gamer of all sorts!
                    </div>
                    <div className="social-media-links">
                        <SocialIcon url="https://linkedin.com/in/teh-zhi-thon/" />
                    </div>
                </div>
        </div>
    );
}

export default About;

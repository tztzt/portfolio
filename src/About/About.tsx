import './About.css'

function About() {
    return (
        <div>
            <div className="row">
                <div className="display-pic">
                    <img className="picture" src={process.env.PUBLIC_URL + '/photo1.jpg'} alt="image" />
                </div>
                <div className="about-content">
                    Name: Zhi Thon <br />
                Major: Computer Engineering (Bachelor of Engineering) <br />
                Graduating: August 2021
            </div>
            </div>
            <div className="about-mumbo">
                Unfortunately, this is an ongoing mini project by me and still looks simple and unpolished, for now.
            </div>
        </div>
    );
}

export default About;

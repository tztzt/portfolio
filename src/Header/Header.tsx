import './Header.css'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

function Header() {

  let location = "/portfolio";

    return (
        <Router>
            <div className="header-row">
                <div className="header-buttons">
                    <Link to={`${location}/education`}>
                        <button className="buttons">
                            Education and Projects
                    </button>
                    </Link>
                    <Link to={`${location}/work`}>
                        <button className="buttons">
                            Work Experience
                    </button>
                    </Link>
                    <Link to={`${location}/projects`}>
                        <button className="buttons">
                            Personal Projects
                    </button>
                    </Link>
                    <Link to={`${location}`}>
                        <button className="buttons">
                            About Me
                    </button>
                    </Link>
                </div>
            </div>
        </Router>
    );
}

export default Header;

import "./Header.scss"
import {
    HashRouter as Router,
    Link
} from "react-router-dom"

function Header() {
    return (
        <Router basename="/">
            <div className="header-row">
                <div className="header-buttons">
                    <Link to="/education">
                        <button className="buttons">
                            Education and Projects
                    </button>
                    </Link>
                    <Link to="/work">
                        <button className="buttons">
                            Work Experience
                    </button>
                    </Link>
                    <Link to="/projects">
                        <button className="buttons">
                            Projects/Works
                    </button>
                    </Link>
                    <Link to="/">
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

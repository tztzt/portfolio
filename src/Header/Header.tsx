import './Header.css'
import {
    HashRouter,
    Link
} from 'react-router-dom'

function Header() {

    return (
        <HashRouter>
            <div className="header-row">
                <div className="header-buttons">
                    <Link to='education'>
                        <button className="buttons">
                            Education and Projects
                    </button>
                    </Link>
                    <Link to='work'>
                        <button className="buttons">
                            Work Experience
                    </button>
                    </Link>
                    <Link to='projects'>
                        <button className="buttons">
                            Personal Projects
                    </button>
                    </Link>
                    <Link to='/'>
                        <button className="buttons">
                            About Me
                    </button>
                    </Link>
                </div>
            </div>
        </HashRouter>
    );
}

export default Header;

import "./App.css";
import Header from "./Header/Header"
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./About/About"
import Education from "./Education/Education"
import Projects from "./Projects/Projects"
import Work from "./Work/Work"

export default function App() {

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Router basename="/">
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
          </Switch >
        </Router >
      </div>
      <footer className="footer-cc">
        This website is an ongoing mini project of mine, you may view the github repo for this project at <a href="https://github.com/tztzt/portfolio"> my github page</a>.
            </footer>
    </div >
  );
}

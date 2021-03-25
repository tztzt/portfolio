import "./App.css";
import Header from "./Header/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./About/About"
import Education from "./Education/Education"
import Projects from "./Projects/Projects"
import Work from "./Work/Work"

export default function App() {
  let location = process.env.PUBLIC_URL;

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Router basename={location}>
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
    </div >
  );
}

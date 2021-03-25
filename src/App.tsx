import './App.css';
import Header from './Header/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './About/About'
import Education from './Education/Education'
import Projects from './Projects/Projects'
import Work from './Work/Work'

export default function App() {
  
  let location = "/portfolio";
  
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Router>
          <Switch>
            <Route exact path={location}>
              <About />
            </Route>
            <Route path={`${location}/education`}>
              <Education />
            </Route>
            <Route path={`${location}/projects`}>
              <Projects />
            </Route>
            <Route path={`${location}/work`}>
              <Work />
            </Route>
          </Switch >
        </Router >
      </div>
    </div >
  );
}

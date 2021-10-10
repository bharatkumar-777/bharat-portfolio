// pages we are importing 
import Aboutme from "./pages/Aboutme"
import Nav from './components/Navbar'
import WorkDetail from "./pages/WorkDetail";

import Contact from './pages/Contact';
import Project from './pages/Project';

// global style;
import Global from './components/GlobalStyle'

import {Route,Switch,useLocation} from 'react-router-dom';

// animation
import {AnimatePresence} from 'framer-motion'

function App() {

  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
        <Global/>
        <Nav/>
        <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
        <Route path="/" exact>
        <Aboutme/>
        </Route>
        <Route path="/projects" exact>
        <Project/>
        </Route>
        <Route path="/projects/:id">
          <WorkDetail/>
        </Route>
        <Route path="/contact" exact>
        <Contact/>
        </Route>
        </Switch>
        </AnimatePresence>
       
       
       
    </div>
  );
}

export default App;

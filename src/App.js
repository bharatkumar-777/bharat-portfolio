// pages we are importing 
import Aboutme from "./pages/Aboutme"
import Nav from './components/Navbar'

import Contact from './pages/Contact';
import Project from './pages/Project';

// global style;
import Global from './components/GlobalStyle'

import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Global/>
        <Nav/>
        <Switch>
        <Route path="/" exact>
        <Aboutme/>
        </Route>
        <Route path="/contact" exact>
        <Contact/>
        </Route>
        <Route path="/projects" exact>
        <Project/>
        </Route>
        </Switch>
       
       
       
    </div>
  );
}

export default App;

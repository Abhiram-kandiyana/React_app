import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import DashBoard from './components/dashboard/Dashboard.js';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import CreateProject from './components/projects/CreateProject';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={DashBoard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/createproject' component={CreateProject}/>
        </Switch>
        
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
 
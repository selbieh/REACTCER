import React, { Component } from 'react';
import classes from  './App.module.css';
import AllClients from './AllClients/AllClients';
import AddNewClient from './AddNewClient/AddNewClient';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom'


class App extends Component {

  

  render() {


    


    return (
      <div className={classes.App}>
        <Route exact path='/' component={AllClients} {...this.props} />
        <Route exact path='/add-client' component={AddNewClient}  {...this.props}/>

        
      </div>
      

    );
  }
}

export default withRouter(App);

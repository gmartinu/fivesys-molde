import React, { Component } from 'react';
import './App.css'

import Home from './views/home'
import SignIn from './views/sign_in'

import { history } from './redux/_helpers';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';

import PublicRoute from './routes/public';
import LayoutRoute from './routes/private_layout'
import { alertActions } from './redux/_actions';
    
class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
        this.props.clearAlerts();
    });
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <PublicRoute restricted={false} component={SignIn} path="/" exact/>
          <LayoutRoute restricted={true} title={'Home'} component={Home} path="/home" exact/>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

export default connect(mapState, actionCreators)(App);
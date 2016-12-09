import React, { Component } from 'react'
import './App.css'
import { Router, Route, browserHistory } from 'react-router'
import ProcessExecutionAppBar from './components/ProcessExecutionAppBar'
import ProcessExecutionTaskList from './components/ProcessExecutionTaskList'
import ProcessExecutionBottomNavigation from './components/ProcessExecutionBottomNavigation'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <ProcessExecutionAppBar />
          <Router history={browserHistory}>
            <Route path="/" component={() => (<ProcessExecutionTaskList />)} />
          </Router>
          <ProcessExecutionBottomNavigation />
        </div>
      </div>
    )
  }
}

export default App;

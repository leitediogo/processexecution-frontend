import React, { Component } from 'react'
import './App.css'
import { Router, Route, browserHistory } from 'react-router'
import ProcessExecutionAppBar from './components/ProcessExecutionAppBar'
import ProcessExecutionTaskList from './components/ProcessExecutionTaskList'
import ProcessExecutionBottomNavigation from './components/ProcessExecutionBottomNavigation'
import agent from 'superagent'


// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

class App extends Component {

  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }



  componentDidMount() {
    agent.get('http://localhost:8080/activiti-rest/service/runtime/tasks?assignee=dleite')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With')
      .set('Access-Control-Allow-Credentials', 'true')
      .auth('kermit', 'kermit')
      .withCredentials()
      .then(function (res) {
        this.setState({ tasks: res.body })
        console.log(this.state)
      }.bind(this));
  }

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

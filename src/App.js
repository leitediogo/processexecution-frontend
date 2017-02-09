import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Router, Route, browserHistory } from 'react-router'
import ProcessExecutionAppBar from './components/ProcessExecutionAppBar'
import ProcessExecutionTaskList from './components/ProcessExecutionTaskList'
import ProcessExecutionBottomNavigation from './components/ProcessExecutionBottomNavigation'
import agent from 'superagent'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

//pallete layout definition below
const muiTheme = getMuiTheme({
    //spacing: '200',
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: '#455A64',
        //primary2Color: 'green',
        //primary3Color: 'green',
        //accent1Color: 'green',
        //accent2Color: 'green',
        //accent3Color: 'green',
        //textColor: 'white',
        //alternateTextColor: 'white',
        canvasColor: 'white',
        borderColor: '#0097A7',
        //disabledColor: 'green',
        //pickerHeaderColor: 'green',
        //clockCircleColor: fade('green', 0.07),
        shadowColor: 'green',
    },
    appBar: {
        height: 50,
    },
    bottomNavigation: {
        backgroundColor: '#455A64',
        unselectedColor: '#0097A7',
        selectedColor: 'white',
        height: 50,
        unselectedFontSize: 12,
        selectedFontSize: 14,
    },
})

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
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <div>
          <ProcessExecutionAppBar />
          <Router history={browserHistory}>
            <Route path="/" component={() => (<ProcessExecutionTaskList />)} />
          </Router>
          <ProcessExecutionBottomNavigation />
        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
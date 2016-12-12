import React, { Component } from 'react'
import ProcessExecutionTask from './ProcessExecutionTask'
import avatar from '../images/avatar.jpg'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'

const styles = {
    button: {
        cursor: 'pointer',
        display: 'block',
        margin: 'auto'
    },
    label: {
        color: 'blue'
    }
}

class ProcessExecutionTaskList extends Component {

    constructor() {
        super()
        this.state = {
            taskList: [
                { id: 0, timestamp: 811396800000, subject: 'KYC exception handling for customer 58429323', process: 'Account Opening', assignedTo: 'Diogo Leite', status: 'open' },
                { id: 1, timestamp: 1108702800000, subject: 'Citius extraction exception for customer 430823', process: 'Insolvency Handling', assignedTo: 'Jonh Cain', status: 'open' },
                { id: 2, timestamp: 1156564800000, subject: 'File read exception for process 002394390394', process: 'Insolvency Handling', assignedTo: 'Manfred Williams', status: 'open' },
                { id: 3, timestamp: 1256443200000, subject: 'Notification: Process 00328293 ended', process: 'Insolvency Handling', assignedTo: 'Operations', status: 'open' },
                { id: 4, timestamp: 1286942400000, subject: 'Notification: Process 08289238 started', process: 'Account Opening', assignedTo: 'Helpdesk', status: 'open' },
                { id: 5, timestamp: 1331697600000, subject: 'Fraud handling for customer 03232856', process: 'Fraud Handling', assignedTo: 'José Abrantes', status: 'open' },
                { id: 6, timestamp: 1369800000000, subject: 'Customer analysis', process: 'Fraud Handling', assignedTo: 'Martin Fowler', status: 'open' }
            ]
        }
    }

    handleCloseTask = (taskId) => {
        console.log(taskId
        )
        let change = this.state
        change.taskList[taskId].status = 'closed'
        this.setState(change)
        console.log(this.state)
    }

    render() {
        //replace map by filter for opened status
        let cards = this.state.taskList.map((task) => {
            if (task.status === 'open') {
                return (
                    <ProcessExecutionTask
                        subject={task.subject}
                        key={task.id}
                        id={task.id}
                        process={task.process}
                        assignedTo={task.assignedTo}
                        avatar={avatar}
                        handleCloseTask={this.handleCloseTask.bind(this)}
                        />
                )
            } else return []
        })

        // console.log(cards)
        return (
            <MuiThemeProvider>
                <div >
                    <br />
                    <FlatButton
                        label="Opened Tasks"
                        labelPosition="after"
                        />
                    <FlatButton
                        label="Closed Tasks"
                        labelPosition="after"
                        style={styles.button}
                        />
                    <br />
                    {cards}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default ProcessExecutionTaskList
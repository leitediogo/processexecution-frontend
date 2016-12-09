import React, { Component } from 'react'
import ProcessExecutionTask from './ProcessExecutionTask'
import avatar from '../images/avatar.jpg'

let style = {
    margin: 20,
    textAlign: 'center'
}
const tasks = [
    { id: 0, timestamp: 811396800000, subject: 'KYC exception handling for customer 58429323', process: 'Account Opening', assignedTo: 'Diogo Leite', status: 'open' },
    { id: 1, timestamp: 1108702800000, subject: 'Citius extraction exception for customer 430823', process: 'Insolvency Handling', assignedTo: 'Jonh Cain', status: 'open'  },
    { id: 2, timestamp: 1156564800000, subject: 'File read exception for process 002394390394', process: 'Insolvency Handling', assignedTo: 'Manfred Williams', status: 'open'  },
    { id: 3, timestamp: 1256443200000, subject: 'Notification: Process 00328293 ended', process: 'Insolvency Handling', assignedTo: 'Operations', status: 'open' },
    { id: 4, timestamp: 1286942400000, subject: 'Notification: Process 08289238 started', process: 'Account Opening', assignedTo: 'Helpdesk', status: 'open'  },
    { id: 5, timestamp: 1331697600000, subject: 'Fraud handling for customer 03232856', process: 'Fraud Handling', assignedTo: 'José Abrantes', status: 'open'  },
    { id: 6, timestamp: 1369800000000, subject: 'Customer analysis', process: 'Fraud Handling', assignedTo: 'Martin Fowler', status: 'open'  }
]
class ProcessExecutionTaskList extends Component {
    render() {
        let cards = tasks.map(function (task) {
            return (<ProcessExecutionTask 
                subject={task.subject} 
                key={task.id} 
                process={task.process} 
                assignedTo={task.assignedTo}
                avatar={avatar}/>)
        })
        console.log(cards)
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                    <div style={style}>{cards}</div>
                <br />
                <br />
                <br />
            </div>

        )
    }
}

export default ProcessExecutionTaskList
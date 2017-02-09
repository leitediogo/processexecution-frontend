import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import ProcessExecutionAppBarRightIconMenu from './ProcessExecutionAppBarRightIconMenu'
import ProcessExecutionAppBarLeftIconMenu from './ProcessExecutionAppBarLeftIconMenu'
import { browserHistory } from 'react-router'

const styles = {
    title: {
        cursor: 'pointer'
    }
}

class ProcessExecutionAppBar extends Component {

    handleAppBarClick() {
        console.log('handleAppBarClick')
        browserHistory.push('/')
    }

    render() {
        return (
            <div>
                <AppBar
                    title={<span style={styles.title}>Inbox</span>}
                    onTitleTouchTap={this.handleAppBarClick}
                    iconElementRight={<ProcessExecutionAppBarRightIconMenu />}
                    iconElementLeft={<ProcessExecutionAppBarLeftIconMenu />}
                />
            </div>
        )
    }
}

export default ProcessExecutionAppBar
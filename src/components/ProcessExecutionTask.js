import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
    card: {
        margin: 20,
        textAlign: 'center'
    },
    paper: {
        margin: 20,
        textAlign: 'center'
    },
    select: {
        align: 'left'
    }
}

class ProcessExecutionTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    handleToggle = (event, toggle) => {
        this.setState({ expanded: toggle });
    };

    handleExpand = () => {
        this.setState({ expanded: true });
    };

    handleReduce = () => {
        this.setState({ expanded: false });
    };

    handlePublish = () => {
        this.updateTask(this.props.task.key)
        //window.location.reload()
    }

    updateTask(id) {
        console.log('updateTask', id)
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Card zDepth={1} style={styles.card}>
                        <CardHeader
                            title="Assigned To"
                            subtitle={this.props.assignedTo}
                            actAsExpander={true}
                            showExpandableButton={true}
                            avatar={this.props.avatar}
                            />
                        <CardTitle
                            title={this.props.process}
                            subtitle={this.props.subject}
                            />
                        <CardText expandable={true}>
                            <TextField
                                id="approvalDescription"
                                hintText="Approval Description"
                                floatingLabelText="Approval Description"
                                />
                            <br />
                        </CardText >
                        <CardActions expandable={true}>
                            <FlatButton label="Close" onClick={this.handlePublish} />
                            <FlatButton label="Assign To" onClick={this.handleExpand} />
                            <FlatButton label="Reject" onClick={this.handleExpand} />
                        </CardActions>
                    </Card>
                </div>
            </MuiThemeProvider>

        );
    }
}

export default ProcessExecutionTask
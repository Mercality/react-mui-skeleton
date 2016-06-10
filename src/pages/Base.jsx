import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

export default class Base extends Component {
    constructor(props) {
        
        super(props);
        this.state = {open: false};

        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    handleToggle() {
        console.log(this.state);
        this.setState({open: !this.state.open});
    }
    

    handleClose() {
        
        this.setState({open: false});
    }

    render() {
        return (
            <div>
                <AppBar
                title="App Title"
                onLeftIconButtonTouchTap={this.handleToggle}
                 />
                
                <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                >
                <MenuItem onTouchTap={this.handleClose}>Menu Title</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Menu Title</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Menu Title</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Menu Title</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Menu Title</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Menu Title</MenuItem>
                </Drawer>

                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

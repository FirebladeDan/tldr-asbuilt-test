import React, { Component}  from "react";
import Draggable from 'react-draggable';
import './Objects.css';


export class RectObject extends Component {
    constructor(props) {
        super(props);
        this.x = this.props.x;
        this.y = this.props.y;
        this.state = {
            borderStyle: 'none',
            x: this.props.x,
            y: this.props.y,
            width: '100px'
        };
        
        // This binding is necessary to make `this` work in the callback
        this.handleSelect = this.handleSelect.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleSelect() {
        console.log('clicked!');
    }

    handleMouseDown(){
        this.setState({
            borderStyle: 'solid'
        });
    }

    handleMouseUp(){
        this.setState({
            borderStyle: 'none'
        });
    }

    render() {
        const styles = {
            objectStyle: {
            position: 'relative',
            top: this.state.y,
            left: this.state.x,
            width: this.state.width,
            height: '30px',
            fontSize: '8pt',
            backgroundColor: '#CBCECE',
            textAlign: 'left',
            borderStyle: this.state.borderStyle,
            borderWidth: 'thin',
            cursor:'pointer'
            }
        };
        const { objectStyle } = styles;
        return (
            <Draggable bounds='parent' style={this.state.width}>
                <div style={objectStyle} onMouseDown={this.handleMouseDown} onClick={this.handleSelect} onMouseUp={this.handleMouseUp}>
                    Model: SEL-351<br></br>
                    ID: 11-251-P
                </div>
            </Draggable>
        );
    }
}
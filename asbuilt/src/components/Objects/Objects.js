import React from "react";
import './Objects.css';

export class RectObject extends React.Component {
    constructor(props) {
        super(props);
        this.x = this.props.x;
        this.y = this.props.y;
        this.state = {
            borderStyle: 'none',
        };
        
        // This binding is necessary to make `this` work in the callback
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect() {
        this.setState({
            state: {
                borderStyle: 'solid'
            }
        });
        console.log('object click');
    }

    render() {
        const styles = {
            objectStyle: {
            position: 'relative',
            top: this.y,
            left: this.x,
            width: '100px',
            height: '30px',
            fontSize: '8pt',
            backgroundColor: '#CBCECE',
            textAlign: 'left',
            borderStyle: this.state.borderStyle,
            borderWidth: 'thin'
            }
        };
        const { objectStyle } = styles;
        return (
            <div  style={objectStyle} onClick={this.handleSelect}>
                Model: SEL-351<br></br>
                ID: 11-251-P
            </div> 
        );
    }
}
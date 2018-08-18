import React from "react";
import './Objects.css';

export class RectObject extends React.Component {
    constructor(props) {
        super(props);
        this.x = this.props.x;
        this.y = this.props.y;
        this.styles = {
            position: 'relative',
            top: this.y,
            left: this.x,
            width: '100px',
            height: '30px',
            fontSize: '8pt',
            backgroundColor: '#CBCECE',
            textAlign: 'left',
            borderStyle: 'none',
            borderWidth: 'thin'
        };
    }

    handleSelect() {
        this.setState( {
            styles: {
                borderStyle: 'solid',
                borderWidth: 'thick'
            }
        });
    }

    render() {
        return (
            <div  style={this.styles} onClick={(e) => this.handleSelect(e)}>
                Model: SEL-351<br></br>
                ID: 11-251-P
            </div> 
        );
    }
}
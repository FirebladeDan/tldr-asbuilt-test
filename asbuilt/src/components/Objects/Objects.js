import React from "react";
import './Objects.css';

export class RectObject extends React.Component {
    //componentWillReceiveProps()

    render() {
        const {x, y} = this.props;
        const styles = {
            objectStyle: {
                position: 'relative',
                top: y,
                left: x,
                width: '100px',
                height: '30px',
                fontSize: '8pt',
                backgroundColor: '#CBCECE',
                textAlign: 'left'
            }
        };
        return (
            <div  style={styles.objectStyle}>
                Model: SEL-351<br></br>
                ID: 11-251-P
            </div> 
        );
    }
}
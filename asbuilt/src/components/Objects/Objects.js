import React from "react";
import './Objects.css';

export class RectObject extends React.Component {
    constructor(props) {
        super(props);
        this.state.styles = {
                position: 'absolute',
                top: 0,
                right: 0,
                width: 0,
                height: 0
        }
    }

    componentDidMount() {
        this.setState({
            styles: {
                position: 'absolute',
                top: 300,
                right: 300,
                width: 100,
                height:300
            }
        });
    }

    //componentWillReceiveProps()

    render() {
        return (
            <div ref="root" style={this.state.styles}>
                Model: SEL-351
                ID: 11-251-P
            </div> 
        );
    }
}
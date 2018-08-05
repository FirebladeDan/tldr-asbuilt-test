import React from "react";
import './Panels.css';

//DIP = Device Instance Panel
//diList = Device Instance List
//di = Device Instance
export class DIPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {diName: ''};
    }

    clickedDI(id, e) {
        e.preventDefault();
        this.setState(diName => ({diName: id}));
    }

    render() {
        return (
            <div className='DIPanel'>
                <strong>Project Devices</strong>
                <ul>
                    {this.props.diList.map( 
                        (di)=><li onClick={(e) => this.clickedDI(di.id, e)}>
                            {di.model}, {di.id}
                     </li>
                     )}
                </ul>
                    <h1>{this.state.diName}</h1>
            </div> 
        );
    }
}
import React from "react";
import './Panels.css';

//DIP = Device Instance Panel
//diList = Device Instance List
//di = Device Instance
export class DIPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='DIPanel'>
                <strong>Project Devices</strong>
                <ul>
                    {this.props.diList.map( 
                        (di)=><li onClick={DIContextMenu}>
                            {di.model}, {di.id}
                     </li>
                     )}
                </ul>
            </div>
        );
    }
}

function DIContextMenu(props) {
    return (
        <div className='DIContextMenu'>CONTEXT MENU</div>
    );
        
}

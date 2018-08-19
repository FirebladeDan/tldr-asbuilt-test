import React, { Component } from "react";
import { ListGroup, ListGroupItem, Label, Panel } from 'react-bootstrap';
import './Panels.css';

//DIP = Device Instance Panel
//diList = Device Instance List
//di = Device Instance
export class DIPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel>
                <Panel.Heading>
                <Panel.Title componentClass="h4">Project Devices</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{padding:'0'}}>
                    <ListGroup>
                        {this.props.diList.map( 
                            (di)=><ListGroupItem onClick={DIContextMenu}>
                                {di.model}, {di.id}
                        </ListGroupItem>
                        )}
                    </ListGroup>
                </Panel.Body>
            </Panel>
        );
    }
}

function DIContextMenu(props) {
    return (
        <div className='DIContextMenu'>CONTEXT MENU</div>
    );
        
}

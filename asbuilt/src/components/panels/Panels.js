import React, { Component } from "react";
import { ListGroup, ListGroupItem, Well, Collapse, Panel } from 'react-bootstrap';
import Draggable from 'react-draggable';
import './Panels.css';

//DIP = Device Instance Panel
//diList = Device Instance List
//di = Device Instance
export class DIPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openItems: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id){
        var currentItems = this.state.openItems;
        if(currentItems.includes(id))
        {
            currentItems.pop(id);
        }
        else
        {
            currentItems.push(id);
        }
            
        this.setState({
             openItems: currentItems
        })
    }

    render() {
        return (
            <Panel>
                <Panel.Heading>
                <Panel.Title componentClass="h4">Project Devices</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{padding:'0'}}>
                    <ListGroup>
                        {this.props.diList.map((di)=>
                            <ListGroupItem onClick={() => this.handleClick(di.id)}>
                                {di.id}, {di.model}
                                <Collapse in={this.state.openItems.includes(di.id)}>
                                <ListGroup>
                                    <ListGroupItem>
                                        'DateCreated': {di.dateCreatedEpoch}
                                    </ListGroupItem>
                                </ListGroup>
                                </Collapse>
                            </ListGroupItem>
                        )}
                    </ListGroup>
                </Panel.Body>
            </Panel>
        );
    }
}

// function DIContextMenu(props) {
//     return (
//         <div className='DIContextMenu'>CONTEXT MENU</div>
//     );
        
//}

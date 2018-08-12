import React, { Component } from 'react';
import './navbar.css';

class NavbarFeature extends Component {
    render(){
        return (
            <div className='nav-background'>
                <div className='nav-brand'>
                    AsBuilt
                </div>
                <div className='nav-user'>
                    User
                </div>
            </div>
        );
    }
}

export default NavbarFeature;
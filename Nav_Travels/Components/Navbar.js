import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link className="navbar-brand" to="#">Nav Travels</Link>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault" style={{'paddingLeft':'86%'}}>
                        {this.props.location.pathname == '/home' ? <ul className="navbar-nav mr-auto" style={{ 'float': 'right' }}>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Logout</Link>
                            </li>
                        </ul> : null}

                    </div>
                </nav>
            
        )
    }
}

export default Navbar;
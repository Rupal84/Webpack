import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Nav Travels</a>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault" style={{'paddingLeft':'86%'}}>
                        {this.props.location.pathname == '/home' ? <ul className="navbar-nav mr-auto" style={{ 'float': 'right' }}>
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Logout</a>
                            </li>
                        </ul> : null}

                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;
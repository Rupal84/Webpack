import React from 'react';
import Navbar from './Navbar.js';

class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar location={this.props.history.location} />
                <form className="form-signin">
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={() => {
                        this.props.history.push('/home');
                    }}>Sign in</button>
                </form>
            </React.Fragment>
        )
    }
}

export const Component = Login;
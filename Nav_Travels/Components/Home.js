import React from 'react';
import Navbar from './Navbar.js';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar location={this.props.history.location} />
                <main role="main">

                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-3">Hello, We Make Awesome Tours..!</h1>
                            <p><a tool-tip-msg="This functionality is not implemented" className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h3>All inclusive Tours</h3>
                                <p>If you are looking for a perfect travel then the best option is our all inclusive travel. We cooperate with the most reliable airlines who can boast best reputation.</p>
                                <p><a tool-tip-msg="This functionality is not implemented" className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                            </div>
                            <div className="col-md-4">
                                <h3>User Friendly Search</h3>
                                <p>Searching your destination, hotels, airlines, tickets made easy than ever. We have enabled image search and our chatbot will help you search destinations even faster.</p>
                                <p><a tool-tip-msg="This functionality is not implemented" className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                            </div>
                            <div className="col-md-4">
                                <h3>Fast and Reliable Booking</h3>
                                <p>We have perfect Booking system which is also easier for the first timers. All latest payment options are provided including Paytm, UPI and credit cards.</p>
                                <p><a tool-tip-msg="This functionality is not implemented" className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                            </div>
                        </div>

                        <hr />

                    </div>

                </main>
            </React.Fragment>
        )
    }
}

export const Component = Home;
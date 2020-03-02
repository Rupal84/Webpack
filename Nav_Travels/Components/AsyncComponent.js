import React, { PureComponent } from 'react';

export default class  extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      Component: null
    }
  }

  componentWillMount() {
    console.log('44444444444444444444444');
    if(!this.state.Component) {
      this.props.moduleProvider().then( (res) => {
        console.log('555555555555555555', res);
        const {Component} = res;
        this.setState({ Component })
      });
    }
  }

  render() {
    const { Component } = this.state;

    //The magic happens here!
    return (
      <div>
        {Component ? <Component history={this.props.history} match={this.props.match}/> : <div>Loading</div>}
      </div>
    );
  }
};
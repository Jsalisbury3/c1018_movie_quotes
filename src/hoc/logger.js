import React, { Component } from 'react';

export default (WrappedComponent, prefix='')=> {
    class Logger extends Component {
        log(msg){
            console.log(prefix, msg);
        }
        render(){
            return <WrappedComponent {...this.props} log={this.log}/>
        }
    }

    return Logger;
}
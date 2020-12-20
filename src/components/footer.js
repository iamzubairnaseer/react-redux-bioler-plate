import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <div>
                <h1>FOOTER</h1>
                <h4>{this.props.appName}</h4>
                <h4>{this.props.email}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appName: state.app.appName,
        email: state.auth.email
    }
}

export default connect(mapStateToProps, null)(Footer);
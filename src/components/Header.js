import React from 'react';
import { connect } from 'react-redux'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>HEADER</h1>
                <h2>App Name: {this.props.appName}</h2>
                <h2>User Name: {this.props.username}</h2>
                <h2>Email: {this.props.email}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appName: state.app.appName,
        username: state.auth.username,
        email: state.auth.email
    }
}

export default connect(mapStateToProps, null)(Header);
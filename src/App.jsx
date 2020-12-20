import React from 'react';
import { connect } from 'react-redux'
import Footer from './components/footer'
import Header from './components/Header'
import { changeName, changeAppName, changeEmail } from './store/action/index'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }
  render() {
    return (
      <div>
        <Header />
        <input onChange={e => this.setState({input:e.target.value})} type='text' placeholder='New Name' />
        <button onClick={()=>this.props.username(this.state.input)}>Change Name</button>
        <button onClick={()=>this.props.appName(this.state.input)}>Change App Name</button>
        <button onClick={()=>this.props.email(this.state.input)}>Change Email</button>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    username: (data) => dispatch(changeName(data)),
    appName: (data) => dispatch(changeAppName(data)),
    email: (data) => dispatch(changeEmail(data))
  }
}

export default connect(null, mapDispatchToProps)(App);
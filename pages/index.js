import React from 'react'
import { initStore } from '../store'
import Main from '../components/signIn'
import {connect} from "react-redux";


class LogIn extends React.Component {
  render () {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

export default connect(initStore, null)(LogIn)

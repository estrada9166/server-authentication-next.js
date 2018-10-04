import React from 'react'
import { initStore } from '../store'
import Main from '../components/signUp'
import {connect} from 'react-redux'

class signUp extends React.Component {
  render () {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

export default connect(initStore, null)(signUp)

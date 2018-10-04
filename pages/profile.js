import React from 'react'
import { initStore } from '../store'
import Main from '../components/profile'
import {connect} from "react-redux";


class Profile extends React.Component {
  render () {
    return (
      <div>
        <Main {...this.props} />
      </div>
    )
  }
}

export default connect(initStore, null)(Profile)

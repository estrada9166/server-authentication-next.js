import React from 'react'
import Router from 'next/router'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

import Main from '../components/profile'

import AuthService from '../auth/AuthService'
const Auth = new AuthService()

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Main {...this.props} />
      </div>
    )
  }
}

export default withRedux(initStore, null)(Profile)

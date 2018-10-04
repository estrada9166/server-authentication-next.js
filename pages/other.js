import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Main from '../components/other'
import {connect} from "react-redux";


class Other extends React.Component {
  render () {
    return (
      <div>
        <Main {...this.props} />
      </div>
    )
  }
}
export default connect(initStore, null)(Other);

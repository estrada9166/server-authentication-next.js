import React, {Component} from 'react'
import Head from 'next/head'
import Header from '../utils/Header'
import NavBar from '../utils/NavBar'

class Main extends Component {
  render () {
    const { pathname } = this.props.url
    return (
      <div>
        <Head>
          <title>Profile</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        </Head>
        <Header pathname={pathname} />
        <NavBar />
      </div>
    )
  }
}

export default Main

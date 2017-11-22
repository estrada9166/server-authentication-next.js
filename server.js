const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const verifyJWT = token => {
  return new Promise(resolve => {
    resolve(jwt.verify(token, 'secret account key'))
  })
}

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const isLoggedIn = async (req, res, next) => {
  try {
    await verifyJWT(req.cookies['id_token'])
    return res.redirect('/profile')
  } catch (err) {
    next()
    return;
  }
}

const isNotLoggedIn = async (req, res, next) => {
  try {
    await verifyJWT(req.cookies['id_token'])
    next()
    return;
  } catch (err) {
    return res.redirect('/')    
  }
}

app.prepare()
.then(() => {
  const server = express()

  server.use(cookieParser())

  server.get('/', isLoggedIn, (req, res) => {
    const actualPage = '/'
    return app.render(req, res, actualPage)
  })

  server.get('/signUp', isLoggedIn,(req, res) => {
    const actualPage = '/signUp'
    return app.render(req, res, actualPage)
  })

  server.get('/profile', isNotLoggedIn, (req, res) => {
    const actualPage = '/profile'
    return app.render(req, res, actualPage)
  })

  server.get('/other', isNotLoggedIn, (req, res) => {
    const actualPage = '/other'
    return app.render(req, res, actualPage)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

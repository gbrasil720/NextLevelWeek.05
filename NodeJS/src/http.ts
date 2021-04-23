import express from 'express'
import path from 'path'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'

import './database'
import { routes } from './routes'

const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')))
app.set('views', path.join(__dirname, '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/pages/client', (req, res) => {
  return res.render('html/client.html')
})

app.get('/pages/admin', (req, res) => {
  return res.render('html/admin.html')
})

const http = createServer(app)
const io = new Server(http)

io.on('connection', (socket: Socket) => {
  // console.log(`New connection: ${socket.id}`)
})

app.use(express.json())
app.use(routes)

export { http, io }
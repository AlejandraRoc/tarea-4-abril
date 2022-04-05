const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router('data.json')
const middleware = jsonserver.defaults()

server.use(middleware)
server.use(router)

const port = process.env.PORT || 3000

server.listen(port, ()=>{
     console.log('JSON server is running')
})
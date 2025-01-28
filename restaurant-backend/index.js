// import json server 

const jsonServer = require('json-server')

//create a server application using json server

const rstServer = jsonServer.create()

//setup path for db.json

const router =jsonServer.router('db.json')

//return middleware

const middleware = jsonServer.defaults()

// setup a port number

const port = 3002

// use in rest server

rstServer.use(middleware)
rstServer.use(router)

//to run the server

rstServer.listen(port,()=>{
    console.log('restaurant server listening on port' + port);
})
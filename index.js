//importing json server
const JSONserver = require('json-server')

//create a server
const MPserver = JSONserver.create()

//setting route to resource
const route = JSONserver.router('db.json')

//define middleware
const middleware = JSONserver.defaults()

//define PORT number
const PORT = 3000 | process.env.process

//implementing middleware
MPserver.use(middleware)

//implementing route to resource
MPserver.use(route)

//run the server
MPserver.listen(PORT,()=>{
    console.log(`The server is running at :${PORT}`);
})
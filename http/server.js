// HTTP

const { log } = require('console')
const fs = require('fs')
const http = require('http')
const path = require('path')

const server = http.createServer( (req, res) => {

    log(req.url, req.method)

    res.setHeader('Content-Type', "text/html")



    fs.readFile(path.join(__dirname, 'home.html'), 'utf-8' , (err, data) => {
        if(err) throw err

        res.end(data)
        
    } )


   
})




server.listen(3000, 'localhost', () => {

log("Server started")
})
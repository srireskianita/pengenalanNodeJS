const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res) => {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        if(err){
            console.error(err)
            res.write('Terjadi kesahalan pada server')
            res.end(txt)
            return
        }
   
        res.write(data)
        res.end()
    })
   
}).listen(8000)

console.log('server running at port 8000');
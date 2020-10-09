const http = require('http');
const moment  = require('moment');

const server = http.createServer(function(req,res) {
    const currentDate = moment().format('llll')
    res.end(currentDate)
})

server.listen(8000);
console.log('server running at port 8000');
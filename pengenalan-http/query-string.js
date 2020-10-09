const http = require('http');
const url = require('url');

const server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var q = url.parse(request.url, true).query;
    var txt ='Kata kunci: ' + q.keyword;
    res.end(txt)
}).listen(8000)

console.log('server running at port 8000');
const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {

    if(req.url === '/home') {

        res.writeHead(200, {'Contrent-Type': 'text/html'})
        res.end('<h1>Home Page</h1>')

    }

    if(req.url === '/users') {

        const users = [
            {
                name: 'John Doe',
                email: 'John@doe.com'
            },
            {
                name: 'Jane Doe',
                email: 'Jane@Doe.com'


            }]

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(users));
    };


});

server.listen(port, () => console.log('Server On na porta', port));
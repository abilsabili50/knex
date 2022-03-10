const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'db_sekolah'
    }
}

let data;

const knex = require('knex')(options);
const http = require("http");
const PORT = process.env.PORT || 5000;

knex.from('murid').select("*")
    .then((rows) => {
        console.log(JSON.stringify(rows));
        data = JSON.stringify(rows);
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });

const server = http.createServer(async(req, res) =>{
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PUT, POST, GET",
        "Access-Control-Max-Age": 2592000
    }
    if(req.url === "/api" && req.method === "GET"){

        res.writeHead(200, headers);

        res.write(data);

        res.end();
    }else{
        res.writeHead(404, headers);
        res.end(JSON.stringify({"message" : "Route not found"}));
    }
})

server.listen(PORT, () => {
    console.log(`server started on port : ${PORT}`);
})

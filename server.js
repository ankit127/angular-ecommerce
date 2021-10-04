const http =  require('http');
const app = require('./backend/app');
/*
http.createServer((req,res) =>{
    console.log("Server is Up..");
    console.log("Ram Ram");
}).listen(3000);
*/

http.createServer(app).listen(3000);
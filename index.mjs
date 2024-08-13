import http from "http";

 const server= http.createServer((request, response)=> {
    response.end("Hello World!!! Ist nicht waaaaaar!")
});

 server.listen(3000, "127.0.0.1", ()=> {
     console.log("Server hört auf Anfragen auf Port 3000")
 })

const http= require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.end('Welcome to our Home page')
    }
    if(req.url=='/about')
    {
        res.end('here is short story!')
    }
    else{
    res.end(`
    <h1> Opps!</h1>
    <p> We cant seem to fimd the page you are looking </p>
    <a href ="/">Back Home</a>
    `)
    }
})

server.listen(5000)



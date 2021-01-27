const fs=require('fs')
const { clearScreenDown } = require('readline')
const http = require('http')
const url = require('url')

//FILES

// Blocking, syncrhonous way
// const textIn=fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn)
// const textOut=`This is what we know about the avocado: ${textIn} \nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('file written')

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err,data1)=>{
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err,data2)=>{
//         console.log(data2)
//         fs.readFile('./txt/append.txt', 'utf-8', (err,data3)=>{
//             console.log(data3)
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`,'utf-8', err=>{
//                 console.log('your file has been written')
//             })
//         })
//     })
// })
// console.log('will read file first')

//SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj=JSON.parse(data)

const server=http.createServer((req,res)=>{
    const pathName=req.url

    if (pathName==='/' || pathName==='/overview') {
        res.end('this is OVERVIEW')
    } else if (pathName==='/product') {
        res.end('this is PRODUCT')
    } else if (pathName==='/api') {
        res.writeHead(200, {
            'Content-type':'application/json'
        })
        res.end(data)
        
    } else {
        res.writeHead(404, {
            'Content-type':'text/html',
        })
        res.end('<h1>page not found</h1>')
    }
    
})

server.listen(8000,'172.19.160.158',()=>{
    console.log('Listening to requests on port 8000')
})
const fs=require('fs')
const { clearScreenDown } = require('readline')
const http = require('http')

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

const server=http.createServer((req,res)=>{
    console.log(req)
    res.end('Hello from the server')
})
server.listen(8000,'172.19.160.158',()=>{
    console.log('Listening to requests on port 8000')
})
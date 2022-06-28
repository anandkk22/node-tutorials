// const { readFile, writeFile } = require('fs')
// console.log('start');

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const first = result

//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile('./content/resultFile.txt', `Here is the result: ${first}, ${second}`,  (err, result) => {
//             if(err) {
//                 console.log(err);
//                 return
//             }
//             console.log('done this task');
//         })
//     })
// })
// console.log('next task');

const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to my home page')
    }
    else if (req.url === '/about') {
        res.end('About page')
    } else {
        res.end(`
        <h1>Page doesnot exist</h1>
        <a href="/">back</a>
        `)
    }

})

server.listen(5000)
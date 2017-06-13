var fs = require('fs')

var rs = fs.createReadStream('src/index.html')
var ws = fs.createWriteStream('dist/index.html')
rs.pipe(ws)

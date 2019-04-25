const express = require('express');
const app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port ,function(){
  console.log(`server started on port ${port}`);
})

// const NodeMediaServer = require('node-media-server');

// const config = {
//   rtmp: {
//     port: 1935,
//     chunk_size: 60000,
//     gop_cache: true,
//     ping: 30,
//     ping_timeout: 60
//   },
//   http: {
//     port: process.env.PORT || 8000,
//     allow_origin: '*'
//   }
// };

// var nms = new NodeMediaServer(config)
// nms.run();

var http = require('http');
var CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test'
  };
  
    
var server = http.createServer(async(req,res)=>{
      if(req.url === '/result4/'){
          
    
      res.writeHead(200,{
              'Content-Type':'application/json',
              'x-test':"x",
              ...CORS,
          })
          var xTest = req.headers['x-test'];
          let data = '';
          await req.on('data', function(chunk){
            data += chunk;
            }).on('end', () => {
          })
          res.write(JSON.stringify({
            "message":"staskzn",
            "x-result":xTest,
            "x-body":data
            }
            ))
      }
      res.end()
      
  });
  server.listen(()=>{
      console.log('Working')});

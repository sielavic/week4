const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};

const s = require('http').Server((req, res) => {
    
    if (req.url==='/result4/'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8', ...CORS});
        res.write('staskzn\n');
        
    }else{
            res.write('no\n');
        }
   
    
    res.end();
});
s.listen(4321);

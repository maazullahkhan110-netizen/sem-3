const http=require('http');
let items =['apple','banana'];
const server =http.createServer((req,res)=>{
    res.setHeader('content-type','application/json');
    if(req.method==='GET'){
        res.end(JSON.stringify(items));
    }
    else if (req.method==='POST'){
        let body='';
        req.on('data',chunk => body +=chunk);
        req.on('end',() =>{
            items.push(body);
            res.end('items added:+body');
        });
    }
    else if (req.method ==="PUT"){
        items[0]='updated items';
        res.end('first item updated');
    }
    else if(req.method==='delete'){
        items.pop();
        res.end('last item removed');

    }


});
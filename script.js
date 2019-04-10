const express = require("express")
var app = express();
const fs = require('fs')

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));



/*app.get('/forum',(request, response)=> {
    response.render('forum', function(err,html) {
        res.send(html)

    })
}); */


app.listen(port,()=>{
    console.log(`Server is up on the port ${port}`);
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var helly = {
    title: 'the hell of',
    heading: 'kill the superman',
    content: ` <p>
    die you son of a bitch
     die you son of a bitch
      die you son of a bitch
       die you son of a bitch
        die you son of a bitch
</p>`,
heading2: 'the bet neer dies'
    };
    
    function createTtemplate(data){
        var title=data.title;
        var heading=data.heading;
        var content=dta.content;
        var heading2=data.heading2;
        
        var htmltemplate=
        {
 <html>
    <head>
 <title> 
 ${title}
 </title>
 <link href="/ui/style.css" rel="stylesheet" />
 </head>
 <body>
    <div class='hell'>
    <hr/>
<h1>
${heading}
</h1>
<div>
${content}
</div>
<h2>
   ${heading2}
   </h2>
</div>
</body>
</html>
        }
    }
app.get('/article-one', function (req, res) {
  res.send(createtemplate(article-one));
});

app.get('/article-two', function (req, res) {
  res.send('hel two');
});

app.get('/article-three', function (req, res) {
  res.send('kill the batman');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

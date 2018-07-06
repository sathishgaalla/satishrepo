var http = require("http");
var dbCon = require("./dbCon.js");
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/api/users', function (req, res) {  
    dbCon.query('SELECT * FROM user', function(err, results) {
        if (err) throw err
       res.end(JSON.stringify(results));
       
      });
    });

    app.get('/api/users/:id', function (req, res) {  
        dbCon.query('SELECT * FROM user where id=?',[req.params.id], function(err, results) {
            if (err) throw err
           res.end(JSON.stringify(results));
           
          });
        });

        app.get('/api/userLogin/:username/:password', function (req, res) {  
            dbCon.query('SELECT * FROM user where username=? and password=?',[req.params.username,req.params.password], function(err, results) {
                if (err) throw err
               //res.end(JSON.stringify(results));
               var authanticated = (results.length>0)?true:false;
               res.end(JSON.stringify(authanticated));
              });
            });
    
    app.listen(3000);
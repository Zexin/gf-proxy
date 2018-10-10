const colors = require( "colors")
const app = require('./libJS/libExpress.js').initAppOnPort(9999);
const request = require('request');

//c=game&a=newserverList&channel=cn_mica&platformChannelId=GWPZ&check_version=20221&rnd=

const options = {
    uri: "http://adr.transit.gf.ppgame.com/index.php",
    headers:{
        'X-Unity-Version': '5.2.5f1',
        'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 8.1.0; MI PAD 4 MIUI/8.9.13)',
        'Accept-Encoding': 'gzip',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

app.post('/index.php',function(req,res){
    console.log(req.body)
    let query = req.body;
    if(query.a && query.a ==='newserverList'){
        //replace
        query.channel = 'cn_mica';
        query.platformChannelId = 'GWPZ';
        // 获取 android版本服务器地址
        console.log(query);

        let _options = {
            uri:options.uri,
            headers:options.headers,
            form:query
        };

        request.post(_options, function(error, response, body){
            console.log(body);
            res.send(body)
        });
    }

    if(query.a && query.a === 'heartBeatPacket'){

        let _options = {
            uri:options.uri,
            headers:options.headers,
            form:query
        };
        request.post(_options, function(error, response, body){
            console.log(body);
            res.send(body)
        });
    }

    if(query.a && query.a === 'heartBeatPacket'){

        let _options = {
            uri:options.uri,
            headers:options.headers,
            form:query
        };

        request.post(_options, function(error, response, body){
            console.log(body);
            res.send(body)
        });
    }

    if(query.a && query.a === 'bannerEvent'){

        let _options = {
            uri:options.uri,
            headers:options.headers,
            form:query
        };

        request.post(_options, function(error, response, body){
            console.log(body);
            res.send(body)
        });
    }

});

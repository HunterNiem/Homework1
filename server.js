var express = require('express');
var request = require('request');
var app = express();
app.use(express.json())

let friendsNum = 10.0;
let recentChanges=[];

app.get('/friendslist/getNumFriends', function (req, res) {
    console.log(req.body);
    res.json({friendsNum:friendsNum});
});

app.get('/friendslist/getRecentChanges', function (req, res) {
    res.json(recentChanges);
});

app.post('/friendslist/addFriends', function (req, res) {
    if (changes(req.body, true)) {
        res.json({friendsNum:friendsNum});
    }
    else {
        res.json({error: "Please provide a name and number of new friends"});
    }
});

app.post('/friendslist/loseFriends', function (req, res) {
    if (changes(req.body, false)) {
        res.json({friendsNum:friendsNum});
    }
    else {
        res.json({error: "Please provide a name and a number of lost friends"});
    }
});

function changes(change, addFriends) {
    if ("name" in change && "amount" in change && typeof change.amount === 'number') {
        change.time=Date.now();
        if (addFriends) {
            change.type="addFriends";
            friendsNum += change.amount;
        }
        else {
            change.type="loseFriends";
            friendsNum -= change.amount;
        }
        recentChanges.push(change);
        return true;
    }
    else {
        return false
    }
}

var server = app.listen(6723, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});
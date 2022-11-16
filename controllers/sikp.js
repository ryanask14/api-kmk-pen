var request = require('request');

exports.auth = function (req, res) {
    var options = {
        'method': 'POST',
        'url': 'http://10.238.136.117/pen-umkm-dev/api/v1/Auth',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "askrindo",
            "password": "bzMjN9Wc8DeATBKh"
        })

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.json(response.body);
    });

}
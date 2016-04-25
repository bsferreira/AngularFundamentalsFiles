var fs = require('fs');

module.exports.get =  function (req, res) {
    var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};


// module.exports.save =  function (req, res) {
//     var event = req.body;
//     fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
//     res.send(event);
// };

module.exports.save =  function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        var path = 'app/data/event';
        var fileExtension = '.json';
        var event = req.body;
        var files = fs.readdirSync(path);
        if(files.length > 0){
            console.log()
            var lastFile = files[files.length-1];
            var actualName = parseInt(lastFile.substr(0, lastFile.indexOf(fileExtension)));
            event.id = actualName + 1;
        }

        var fileName = path + "/" + event.id + fileExtension;
        fs.writeFileSync(fileName, JSON.stringify(event));
        res.send(event);
    }
    catch (e){
        res.send('[]');
    } finally {
        res.end();
    }
};


module.exports.getAll = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var path = 'app/data/event';

    var files = [];

    try {
        files = fs.readdirSync(path);
        var results = "[";
        for (var idx = 0; idx < files.length; idx++){
            if(files[idx].indexOf('.json') == files[idx].length - 5) {
                results += fs.readFileSync(path + "/" + files[idx]) + ",";
            }
        }

        results = results.substr(0, results.length -1);
        results += "]";

        res.send(results);
    }
    catch (e){
        res.send('[]');
    } finally {
        res.end();
    }

};

var fs = require('fs'); //must execute in cmd -- "npm install --save fs"

var convert = require('xml-js'); //must execute in cmd -- "npm install --save xml-js"

//reads the tmx document
var xml = fs.readFileSync('./KSTOOLS.tmx');

//converts tmx to json
var result = convert.xml2json(xml, {compact: false, spaces: 4});

//writes the result to json file
fs.writeFile ("result.json", result, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);

var data = require('./dict.js');

var params = process.argv;
var string = params[2];
if(string == undefined) {
    return ;
} else {
    console.log(data['$'+ string]);
}

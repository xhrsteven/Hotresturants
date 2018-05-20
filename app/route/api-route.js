var tableData = require('../data/table.js');
var waitData = require('../data/waitinglist.js');

module.exports = function (app) {
    app.get('/api/tables', function (req, res) {
        res.json(tableData);
      });
    
    app.get('api/waitinglist', function (req, res) {
        res.json(waitData);
      });


    app.post('api/tables', function (req, res) {
        if(tableData.length < 5){
            tableData.push(req.body);
            res.json(true);
        }else{
            waitData.push(req.body);
            res.json(false);
        }
      });

    app.post('api/clear', function (req, res) {
        tableData = [];
        waitData = [];
      });
  }
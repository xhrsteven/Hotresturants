var path = require('path');

module.exports = function (app) {
    app.get('/table', function (req,res) {
        res.sendFile(path.join(__dirname + '/../public/table.html'));
      });

    app.get('/reserve',function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/reserve.html'))
      });

    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'))
      });
  }
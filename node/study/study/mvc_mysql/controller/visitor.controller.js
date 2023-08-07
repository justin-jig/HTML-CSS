const visitor = require('../model/visitor.model');


// GET / => localhost:PORT/
exports.main = (req, res) => {
    res.render('index');
}

// GET /visitor => localhost:PORT/visitor

exports.getVisitors = (req, res) => {
    console.log(visitor.getVigitors());
    res.render('visitor', {data:visitor.getVigitors()});
}
// dependencies
var connection = require("./connection.js");

// Execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use in order to retrieve and store data in your DB.


// Helper functions for SQL syntax
function printQuestionMarks(num) 
{
    var arr = [];

    for (var i = 0; i < num; i++) 
    {
        arr.push("?");
    }

    return arr.toString();
}

function objtoSql(ob) 
{
    var arr = [];

    for (var key in ob) 
    {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}



var orm = 
{
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) 
            {
                throw err;
            }

            cb(result);
        });
    },


    insertOne: function (burger, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, burger, function (err, result) {
            if (err) 
            {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function (id, cb) {
      
        var queryString = "UPDATE burgers SET devoured=true WHERE id=(?)";
        connection.query(queryString, id, function (err, result) {
            if (err) 
            {
                throw err;
            }
            cb(result);
        });
    }

};
module.exports = orm;

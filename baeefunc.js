let inquirer = require('inquirer');
var mysql = require("mysql");
var baeeFunc = require("./server");


function addItem(res1, res2, res3, res4) {

  var query = connection.query(
    "INSERT INTO auction SET ?",
    {
      item: ,
      category: ,
      description: ,
      price:
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateBids();
    }
  );

  console.log(query.sql);
}


function updateBids(res) {

  var query = connection.query(
    "INSERT INTO auction SET ?",
    {
      bid: res
    },
    function(err, res) {

      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      compareBid();
    }
  );

  console.log(query.sql);
}

function compareBid() {

  connection.query(
    "SELECT bid FROM auction ",

    function(err, res) {
      console.log(res.affectedRows + " products deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readProducts();
    }
  );
}

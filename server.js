let inquirer = require('inquirer');
var mysql = require("mysql");
var baeeFunc = require("baeeFunk");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "lazeebay_DB"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

const queryBids = () => {

  inquirer.prompt([
    {
      type: "input",
      name: "choice",
      message: "POST an item or BID an Item:"
    }
  ]).then(function(user){
    console.log("You entered the integer: " user.choice);//user.inputNumb);
    var finalResult = queryAction(user.choice); //user.inputNumb);
  });
};


  queryAllSongs();
  queryPopSongs();
});
function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}
function queryPopSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Pop"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });
  // logs the actual query being run
  console.log(query.sql);

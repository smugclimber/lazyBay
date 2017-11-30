let inquirer = require('inquirer');
var mysql = require("mysql");
var baeeFunc = require("./baeeFunk.js");
var clear = require('clear');

clear();
console.log("\nWelcome to LazyBay!!!\n==================================================\nCommand Options:\n==================================================\n1)'POST an auction item'\nThis will create a new auction item for folks to bid on. Set any starting price ya like!\n\n2)'BID on a currently listed item.\nThis will show you all items available.\n==================================================\n" );

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


inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "POST an item or BID an item:",
      choices: ["POST", "BID"]
    }
]).then(function(user){
  console.log("You entered the integer: " + user.choice);
  var finalResult = queryAction(user.choice);
});

const incPost = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'post',
      message: 'What item would you like to post?',

    }
  ]).then(()=>{

  });
};




function queryAction(choice){
  if (choice === BID){

  }else {
    //do post action
  }
}

const queryBids = () => {

};


  console.log(query.sql);

let inquirer = require('inquirer');
var mysql = require("mysql");
var baeeFunc = require("./baeeFunk.js");
var clear = require('clear');

var auctItemsList = ["default1", "default2", "default3"];

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

const incPostOrBid = () => {
  inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: `POST an item or BID an item:`,
        choice: ["POST", "BID"]
      }
  ]).then(function(res){
    console.log("You entered the choice: " + res.choice);
    if(res.choice === "BID"){
      //  ENTER ARGUMENTS WHEN AVAILABLE
      auctItemsList = listBids(function(){
        incSelectBidItem();
      });
      
    } else {
      incPost();
    };
  });
};

const incSelectBidItem = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "auctChoice",
      message: "Select an Auction Item:",
      choices: auctItemsList
    },
  ]).then(function(res){

  });
};

const incPost = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'post',
      message: 'What item would you like to post?',

    }
  ]).then(()=>{
    // ENTER ARGUMENTS WHEN AVIALABLE
    addItem()
  });
};

const incShowBids = () => {

};


incPostOrBid();

// function queryAllSongs() {
//   connection.query("SELECT * FROM songs", function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//     }
//     console.log("-----------------------------------");
//   });
// }
// function queryPopSongs() {
//   var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Pop"], function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//     }
//   });
  // logs the actual query being run
// console.log(query.sql);

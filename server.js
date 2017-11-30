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
<<<<<<< HEAD
      name: "choice",
      message: "POST an item or BID an item:",
      choices: ["POST", "BID"]
    }
]).then(function(user){
  console.log("You entered the integer: " + user.choice);
  var finalResult = queryAction(user.choice);
});
=======
      name: "auctChoice",
      message: "Select an Auction Item:",
      choices: auctItemsList
    },
  ]).then(function(res){

  });
};
>>>>>>> ef90e7494aa6b732ac97d5da92bcf2956d7b9a55

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

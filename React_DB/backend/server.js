const express = require("express");//used to create server and APIs
const mysql = require("mysql2");//used to connect Node.js with MySQL database
const cors = require("cors");//allows frontend and backend to communicate

const app = express();//This creates your Express application.

app.use(cors());  //cors() Allows requests from frontend.
app.use(express.json());//Converts JSON data into JavaScript object.

//here is db connection 
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass@123",
  database: "studentdb"
});

//This tries to connect to database.
db.connect((err) => {
  if (err) {
    console.log("Database Error");
    console.log(err);
  } else {
    console.log("Database Connected");
  }
});

//this is the post api 
app.post("/students", (req, res) => {

  const { name, email } = req.body;

  const sql =
    "INSERT INTO students(name,email) VALUES (?, ?)";


   //Execute Query
  db.query(sql, [name, email], (err, result) => {

    if (err) {
      console.log(err);
      res.send("Insert Failed");
    } else {
      res.send("Data Inserted");
    }

  });

});

//start server
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
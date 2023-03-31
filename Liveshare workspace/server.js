// Import required modules
const express = require("express"); // Node.js framework used for web apps and APIs.
const bodyParser = require("body-parser"); // Middleware helping to parse incoming request bodies in various formats.
const cors = require("cors"); // Allows Cross-Origin Resoruce Sharing for Express.js. CORS - security feature restricting web pages or web applications from making requests to a different domain than the one that served the web page
const jwt = require("jsonwebtoken"); // package that provides a set of functions for creating, verifying, and decoding JSON Web Tokens. Used for Authenticating and Authorisation
const mysql = require("mysql2"); // Node.js driver for connecting MySQL database.

// Create an instance of express app
const app = express();

// Define the port number
const port = 5000; // Port for the server to run on

// Configure middleware
app.use(bodyParser.json()); // Parse incoming request body as JSON
app.use(express.json());
app.use(cors()); // Allow Cross-Origin Resource Sharing (CORS)

// local machine db
// Create a connection to MySQL database
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'uEhCFyxxd3Ncu6',
//   database: 'login'
// });

// brunel db login
const db = mysql.createConnection({
  host: "172.31.82.193",
  user: "G_54",
  password: "vGxKJjQZfd",
  database: "G_54_DB",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

// Handle POST requests to /api/login
app.post("/api/login", (req, res) => {
  // Get username and password from the request body
  const username = req.body.username.toLowerCase(); // Convert the entered username to lowercase
  const password = req.body.password;

  // Query the database to check if the user exists and the password is correct
  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        // Handle server errors
        res.status(500).send({ message: "Server error (logging in)" });
      } else if (result.length > 0) {
        // If the user exists and the password is correct, generate a JWT token and send it back to the client
        const token = jwt.sign({ username }, "secret_key");
        res.status(200).send({ message: "Login successful", token });
      } else {
        // If the user does not exist or the password is incorrect, send an error message to the client
        res.status(401).send({ message: "Invalid credentials" });
      }
    }
  );
});

// Handle POST requests to /api/register
app.post("/api/register", (req, res) => {
  //const maxUsernameLength = 45;
  const firstName = req.body.firstName.toLowerCase();
  const surname = req.body.surname.toLowerCase();
  const username = req.body.username.toLowerCase();
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  //if (username.length > maxUsernameLength) {
  //  res.status(400).send({ message: `Username exceeds the maximum length of ${maxUsernameLength} characters` });
  //}
  //else{
  //  console.log("Under Max Length")
  //}

  // console.log('username:', username);
  // console.log('password:', password);
  // console.log('confirmPassword:', confirmPassword);

  // Check if the password and confirm password match
  if (password !== confirmPassword) {
    res.status(400).send({ message: "Passwords do not match" });
  } else {
    // Query the database to check if the user already exists
    db.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      (err, result) => {
        if (err) {
          res.status(500).send({ message: "Server error (checking)" });
        } else if (result.length > 0) {
          res
            .status(400)
            .send({ message: "Bad Request (Username already taken)" });
        } else {
          // If the user does not already exist, insert the user into the database
          db.query(
            "INSERT INTO users (firstName, surname, username, password) VALUES (?, ?, ?, ?)",
            [firstName, surname, username, password],
            (err, result) => {
              if (err) {
                res.status(500).send({ message: "Server error (inserting)" });
              } else {
                res.status(200).send({ message: "Registration successful" });
              }
            }
          );
        }
      }
    );
  }
});

app.get("/data/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT date, consumption FROM energy_usage WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        throw err;
      }
      const data = results.map((row) => ({
        date: row.date,
        consumption: row.consumption,
      }));
      res.json({ data });
    }
  );
});

app.post('/api/questions', (req, res) => {
  const question = req.body.question;
    // Insert the new question into the database
    db.query(
      'INSERT INTO qna (question) VALUES (?)',
      [question], (err, result) => {
        if (err) {
          res.status(500).send({ message: 'Server error (inserting question)' });
        } else {
          res.status(200).send({ message: 'Question added successfully' });
        }
      }
    );
  });

  app.post("/api/form", (req, res) => {
    const fullname = req.body.fullname
    const phoneNumber = req.body.phoneNumber
    const postcode = req.body.postcode
    const energyCompany = req.body.energyCompany;
    const monthlyCost = req.body.monthlyCost;

    db.query(
        "INSERT INTO form_data (fullname, phoneNumber, postcode, energyCompany, monthlyCost) VALUES (?, ?, ?, ?, ?)",
        [fullname, phoneNumber, postcode, energyCompany, monthlyCost],
        (err, result) => {
            if (err) {
                res.status(500).send({ message: "Server error (inserting)" });
            } else {
                res.status(200).send({ message: "Form Data inserted" });
            }
        }
    );
});


// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

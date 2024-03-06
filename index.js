// Import the mysql , readline packages
const mysql = require('mysql');
const readline = require('readline');
const dotenv = require('dotenv')

dotenv.config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PWD, 
    database: process.env.DB_NAME
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
    rl.question('Enter the SQL query: ', (query) => {
        // Perform database operations based on user input
        connection.query(query, (err, results, fields) => {
            if (err) {
                console.error('Error executing query:', err);
                return;
            }
            // Process the query results
            console.log('Query results:', results);

            // Close the connection when done
            connection.end((err) => {
                if (err) {
                    console.error('Error closing MySQL connection:', err);
                    return;
                }
                console.log('MySQL connection closed');
                // Close the readline interface
                rl.close();
            });
        });
    });
});
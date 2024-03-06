// Import necessary packages
const mysql = require('mysql');
const readline = require('readline');
const dotenv = require('dotenv');
const xlsx = require('xlsx');

// Load environment variables from .env file
dotenv.config();

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create MySQL database connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');

    // Prompt user for SQL query
    rl.question('Enter the SQL query: ', (query) => {
        // Execute SQL query
        connection.query(query, (err, results, fields) => {
            if (err) {
                console.error('Error executing query:', err);
                return;
            }
            // Fetch table data and export to Excel
            fetchTableDataAndExport(connection);
        });
    });
});

// Function to fetch table data and export to Excel
function fetchTableDataAndExport(connection) {
    connection.query('SELECT * FROM SAMPLE', (err, results, fields) => {
        if (err) {
            console.error('Error fetching table data:', err);
            return;
        }

        // Create new workbook and worksheet
        const workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.json_to_sheet(results);
        // Append worksheet to workbook
        xlsx.utils.book_append_sheet(workbook, worksheet, 'Sample');
        // Define Excel file name
        const fileName = 'Sample.xlsx';
        // Write workbook to file
        xlsx.writeFile(workbook, fileName);
        console.log('Table data exported to Excel file:', fileName);
    });
}

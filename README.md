<h1>Multiple row updation using Node.js and MySQL</h1>
    <ol>
        <li>Create a database in Mysql and import data from excel sheet using Table Data Import Wizard.</li>
        <li>Initialize a new Node.js project using 'npm init' and install necessary packages.</li>
        <li><strong>Import Required Packages:</strong> The code imports the necessary packages: mysql, readline, and dotenv.</li>
        <li><strong>Load Environment Variables:</strong> The dotenv package loads environment variables from the .env file into the Node.js environment.</li>
        <li><strong>Create Readline Interface:</strong> The code creates a readline interface to handle user input from the command line.</li>
        <li><strong>Establish Database Connection:</strong> Using the mysql package, the code establishes a connection to the MySQL database using the credentials stored in environment variables (DB_HOST, DB_USER, DB_PWD, DB_NAME).</li>
        <li><strong>Handle Connection Errors:</strong> If there's an error connecting to the MySQL database, an error message is logged to the console.</li>
        <li><strong>Prompt User for SQL Query:</strong> The code prompts the user to enter an SQL query via the readline interface.</li>
        <li><strong>Execute SQL Query:</strong> Once the user enters an SQL query, the code executes the query against the connected MySQL database.</li>
        <li><strong>Handle Query Execution Errors:</strong> If there's an error executing the SQL query, an error message is logged to the console.</li>
        <li><strong>Process Query Results:</strong> If the SQL query is executed successfully, the code logs the results to the console.</li>
        <li><strong>Close Database Connection:</strong> After processing the query results, the code closes the connection to the MySQL database.</li>
        <li><strong>Close Readline Interface:</strong> Finally, the readline interface is closed to release the resources.</li>
      <li>Run the command <strong>'npm start'</strong> to start the application and enter the query.</li>
    </ol>

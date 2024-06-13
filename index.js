// Requiring module
const express = require('express');
 
// Creating express object
const app = express();

// Middleware to parse request bodies

app.use(express.json());

// Defining get request at '/array' route 

   
// Handling GET request
app.get('/', (req, res) => { 
    res.send('A simple Node App is '
        + 'running on this server too') 
    res.end() 
}) 
 
// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
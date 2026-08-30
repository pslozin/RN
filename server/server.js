const express = require('express');

const app = express();
const PORT = 4000;

let userInfo = "Slozins is THE BEST" 

console.log('🔥🔥🔥 THIS IS MY SERVER.JS 🔥🔥🔥');

app.get('/api/data', (req, res) => {
  console.log('API REQUEST RECEIVED');
  res.json({ message: 'Hello from Express.js!' });
});


/*app.get('/api/userinfo', (req, res) => {
  console.log('USER INFO REQUEST RECEIVED');
  res.json({ message: 'User Info is ' });
});*/

app.get('/api/userinfo', (req, res) => {
  console.log('USER INFO REQUEST RECEIVED');

  res.json({
    message: userInfo
  });
});


console.log('About to start server...');

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error('SERVER ERROR:', err);
});

/*app.get('/api/data', (req, res) => {
  console.log('🔥 /api/data was hit');

  res.json({
    message: 'Hello from Express.js!'
  });
});

app.listen(5000, '0.0.0.0', () => {
  console.log('Server running on port 5000');
});
*/




// Sample API route
/*app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from Express.js!" });
    
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/
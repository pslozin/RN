const express = require('express');
require('dotenv').config()
const { Sequelize } = require('sequelize')




const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: 'postgres'
    }
);




const app = express();
app.use(express.json());

const PORT = 4000;

let userInfo = "UBUNTU IS UP " 

console.log('🔥🔥🔥 UBUNTU🔥🔥🔥');

app.get('/api/data', (req, res) => {
  console.log('API REQUEST RECEIVED');
  res.json({ message: 'Hello from Express.js!' });
});

app.get('/', (req, res) => {
  console.log('MAIN PAGE REQUEST RECEIVED');
  res.send('Hello! This message is written directly in your browser.');
  
  //res.json({ message: 'Hello from Express.js!' });
 
});

app.post('/api/userinfotodb', async (req, res) => {
  console.log('USER INFO:', req.body);
  console.log('MAIN PAGE REQUEST RECEIVED');
  //res.send('Hello! This message is written directly in your browser.');
  
//

const { firstname, lastname } = req.body; 
await sequelize.query(`
      INSERT INTO user_data (firstname, lastname)
      VALUES (:firstname, :lastname)
    `, {
      replacements: { firstname, lastname }
    });
  console.log("ORDER BODY FROM FRONTEND", req.body)

  //res.status(200).send('REQUEST RECEIVED');

  res.status(200).json({
      success: true,
      message: 'REQUEST RECEIVED'
    });
  

})

 



app.get('/api/alluserinfo', async (req, res) => {
  console.log('REQUESTING ORDERS')
  await sequelize.query(`SELECT userid, firstName, lastName from user_data`).then((dbRes) => {
    console.log('REQUESTING ORDERS')
    
    res.status(200).send(dbRes[0])
    console.log(dbRes[0])
  })
})


app.get('/api/alldbdata', async (req, res) => {
  console.log('REQUESTING ORDERS')
  await sequelize.query(`SELECT * from user_data`).then((dbRes) => {
    res.status(200).send(dbRes[0])
    console.log(dbRes[0])
  })
})


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
const {Client} = require('pg')

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:1111,
    database:"postgres"
})

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL:', err);
  });

client.query('Select * from users' , (err , res) =>{
    if(!err){
        console.log(res,rows);
    }else{
        console.log(err.message);
    }
    client.end
})
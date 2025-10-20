const express = require('express')
let mysql = require('mysql2');
const { use } = require('react');
const app = express();
const PORT = 3008;
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/',(req, res) => {
    res.send('Hello World')
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yogamysql',
    database: 'mahasiswa',
    port: 3308
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:' + err.stack);
        return;
    }
    console.log('Connection Successfully');
});

//GET
app.get('/api/users', (req,res) =>{
    db.query('Select * FROM mahasiswa', (err,result) => {
        if(err) {
            console.error('Error exectuing query:0' + err.stack);
            res.status(500).send('Error Fecthing users');
            return;
        }
        res.json(result);
    })
})
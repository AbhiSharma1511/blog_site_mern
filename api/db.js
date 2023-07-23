import mysql from 'mysql'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'blog-site'
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});
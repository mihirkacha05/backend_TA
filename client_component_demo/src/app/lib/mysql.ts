import mysql from "mysql2/promise";

const pool=mysql.createPool({
    database: "sql_learn",
    host: "localhost",
    password: "mihir123",
    port: 3306,
    user: "root",

   
});

export default pool;
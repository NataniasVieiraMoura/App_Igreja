import mysql2 from 'mysql2/promise';

async function getConnection(){
    const connection = await mysql2.createConnection({
    host: 'switchback.proxy.rlwy.net',
    user: 'root',
    password: 'pRUDrtqregpQZtXIDvAvwvzCVjGBdjnU',
    database: 'railway',
    port: 51752,
})

return connection
}

export default getConnection;


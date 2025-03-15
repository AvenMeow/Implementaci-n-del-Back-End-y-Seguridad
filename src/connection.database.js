import pg from 'pg' // Configuración de bases de datos PostgreSQL
import 'dotenv/config'  // Gestión de configuraciones sensibles en servidores

/* Step2. database connection */
const {Pool} = pg   // Instancia del framework Postgre
const pool = new Pool({   // Configuración de conexión a la base de datos
    user: 'postgres',
    host: 'localhost',
    database: 'happydb',
    password: '1234',
    port: 5432
})

try { // Verificar si la conexión a la base de datos está activa y funcionando
    await pool.query('SELECT NOW()')
    console.log('Connecting to the database... OK!')
} catch (error) {
    console.log('Connecting to the database... ERROR!')
}

export default pool
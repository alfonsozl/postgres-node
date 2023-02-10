
const { Pool } = require('pg');

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'calis',
  password: 'klingsor',
  port: 5432,
})

module.exports = pool;

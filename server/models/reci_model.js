const { Pool } = require('pg');
const PG_URI = 'postgres://lfjwksxa:Tg6e3M7lbYtPYNXAYV8w4-4Kgr5jlmeO@chunee.db.elephantsql.com/lfjwksxa';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
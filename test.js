const pg = require('pg');

const pool = new pg.Pool({
  host: '127.0.0.1',
  port: 5432,
  database: 'example',
  user: 'diophant',
  password: 'diophant',
});

(async () => {
  const res = await pool.query(
    'select id from users order by id desc limit 1;'
  );
  console.log(res.rows);
})();

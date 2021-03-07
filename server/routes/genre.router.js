const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  // Add query to get all genres
  const sqlText = 'SELECT * FROM "genres" ORDER BY "name" ASC;';

  pool
    .query(sqlText)
    .then((dbRes) => {
      console.log(dbRes);
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.log('Error getting genres', err);
      res.sendStatus(500);
    });
});

module.exports = router;

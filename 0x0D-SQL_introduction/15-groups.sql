-- script that lists the number of records with the same score
-- in the table second_table of the database hbtn_0c_0 in your MySQL server.
<<<<<<< HEAD
SELECT score,
COUNT(*) AS number FROM second_table GROUP BY score ORDER BY score DESC;
=======
SELECT score, COUNT(*) AS number FROM second_table GROUP BY score ORDER BY score DESC;
>>>>>>> e853d4e9a2e37f28dbb52196d27e38576543a834

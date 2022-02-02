-- script that displays the average temperature (Fahrenheit) by city ordered by temperature (descending).
<<<<<<< HEAD
SELECT city,
AVG(value) AS avg_temp FROM temperatures GROUP BY city ORDER BY avg_temp DESC
=======
SELECT city, AVG(value) AS avg_temp FROM temperatures GROUP BY city ORDER BY avg_temp DESC
>>>>>>> e853d4e9a2e37f28dbb52196d27e38576543a834

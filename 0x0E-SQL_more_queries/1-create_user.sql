-- script that creates the MYSQL server user_0d_1
-- Login creation for user
CREATE USER IF NOT EXISTS user_0d_1@localhost IDENTIFIED BY 'user_0d_1_pwd';
-- Grant all priveleges to USER
GRANT ALL PRIVILEGES ON *.* TO user_0d_1@localhost;

-- to create a new database
CREATE DATABASE auth_node;

-- to use database
USE auth_node;

-- creating a new table
CREATE TABLE users (
  id INT(11) NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  image VARCHAR(700)
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE users;

CREATE TABLE posts (
  id INT(11) NOT NULL,
  post TEXT,
  post_image VARCHAR(700),
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE posts
    ADD PRIMARY KEY (id);

ALTER TABLE posts
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;



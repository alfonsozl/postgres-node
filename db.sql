
CREATE DATABASE calis;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(45),
    email VARCHAR(30)
);

INSERT INTO users (id, name, email) VALUES (1, 'Ovidio Guzman', 'ovidioguzman09@gmail.com'), (2, 'Ismael Zambada', 'ismaelzambada09@gmail.com');

SELECT * FROM users;
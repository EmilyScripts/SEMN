BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS users_id_seq CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) UNIQUE NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  bio TEXT NOT NULL,
  cohort VARCHAR(5) NOT NULL,
  picture TEXT NOT NULL,
  github TEXT NOT NULL,
  password TEXT NOT NULL
);

INSERT INTO users (username, first_name, last_name, bio, cohort, picture, github, password) VALUES
('apple', 'Emily', 'Rever', 'who knows, I googled google', 'FAC14', 'emilyrever.jpg', 'EmilyScripts', '$2a10hmsqmbvAqIt5QBM0.EQ7h.PnMOQ4c6yqGCB.o.AhQWfzjbLvp0JJS'),
('banana', 'Nathalie', 'Jonsson', 'I know', 'FAC13', 'nathaliejonsson.png', 'njons', '$2a10l0N1sP9AaKlPMJ/bmyGlv.cVmDsX6G8SFhgZKMMQNTyaoOXQDiK6W'),
('plum', 'Sangita', 'Sunuwar', 'She also knows...', 'FAC14', 'sangitasunuwar.jpg', 'sunuwars', '$2a$10$JbC92brXsw1xDd1/0sagSeX24lCya1zEcQDaNRRAFrSlzaT5perci'),
('cherry', 'Martin', 'Gaston', 'He knows everything!', 'FAC14', 'martingaston.png', 'martingaston', '$2a10T/tDyqlYxFFdvMED3TdI5OZMzgkM/EqDnM/1XT6xOrvh43NYe9DWC');

COMMIT;
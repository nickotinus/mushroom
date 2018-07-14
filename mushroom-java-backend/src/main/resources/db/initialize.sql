DROP TABLE IF EXISTS Task;

CREATE TABLE Task (
  id          SERIAL PRIMARY KEY,
  description TEXT,
  status      VARCHAR(50) NOT NULL
);

INSERT INTO Task (description, status) VALUES ('Do the mega task', 'OPEN');

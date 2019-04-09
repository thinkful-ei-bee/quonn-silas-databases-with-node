CREATE TABLE IF NOT EXISTS shopping_list (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  item_name TEXT,
  price DECIMAL,
  date_added TIMESTAMP DEFAULT now(),
  checked BIT DEFAULT 0 NOT NULL,
  category grocery NOT NULL
);

DROP TYPE IF EXISTS grocery;
CREATE TYPE grocery (
  'Main',
  'Snack',
  'Lunch',
  'Breakfast'
);
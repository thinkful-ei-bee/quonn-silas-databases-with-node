-- psql -U dunder-mifflin -d knex-practice -f ./blogful-scripts/seed.blogful.sql
INSERT INTO blogful_articles (title, content, date_published)
VALUES 
  ('Relating to multidimensional beings', 'Do not be hesitant', now() - '22 days'::INTERVAL),
  ('Cosmology in 2019', 'Not much progress so far', now() - '5 days'::INTERVAL),
  ('How to, now', 'DIY', now() - '7 days'::INTERVAL),
  ('Cooking made difficult', 'broil it', now() - '4 days'::INTERVAL),
  ('New title', 'what can we do', now() - '80 days'::INTERVAL),
  ('Another one', 'everybody', now() - '10 days'::INTERVAL),
  ('Muscle memory and other busy work', 'Hope i did not mispell', now() - '20 days'::INTERVAL)
;

# 
## Week 8 - Server-rendered Full Stack App

### The goal:

- [ ] Build an Express-powered app that lets FAC students view 
- [ ] Use a PostgreSQL database to store and retrieve your data.
- [ ] Use the retrieved data to populate a Handlebars template for server-side rendering to be displayed on the front-end.

## Colours
https://coolors.co/03b5aa-78b7ba-ffcea4-f5f5f5-1c1c1c

## User flow
![](https://i.imgur.com/saJQD17.jpg)



## How to set up 

1. Clone repo 
2. Run psql or pgcli on your command line
3. CREATE DATABASE facsters;
4. CREATE USER your_username WITH SUPERUSER PASSWORD 'your_password';
5. ALTER DATABASE facsters OWNER TO your_username;
6. Create config.env in the project's root directory 
7. Paste DB_URL = postgres://your_username:your_password@localhost:5432/facsters into config.env
8. Create the local database tables: open the database with the login from #7, using psql or pgcli, then run build script: \i database/db_build.js 
10. npm run dev
11. Go to http://localhost:3000/
12. login using: username:apple, password = apples

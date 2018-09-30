const pg = require("pg");
const settings = require("./settings");
const client = new pg.Client({
  user : settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});
let firstName = process.argv[2];
let lastName = process.argv[3];
let birthdate = process.argv[4];

database.insert(firstName, lastName, birthdate);

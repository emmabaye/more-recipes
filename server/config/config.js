 module.exports = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "HEROKU_POSTGRESQL_GRAY_URL",
  }
}
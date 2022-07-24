const path = require('path');

module.exports = ({ env }) => ({
  connection: env('DATABASE_DRIVE', 'sqlite') === 'sqlite' ?
    {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_URL', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    }
    : env('DATABASE_DRIVE') === 'postgres' ?
    {
      client: 'postgres',
      connection: env('DATABASE_URL', 'postgres://root:root@localhost:5432/strabot'),
      useNullAsDefault: true
    }
    : ['mariadb', 'mysql'].includes(env('DATABASE_DRIVE')) &&
    {
      client: 'mysql',
      useNullAsDefault: true
    }
});

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      'APP_KEY_1',
      'APP_KEY_2',
      'APP_KEY_3',
      'APP_KEY_4'
    ]),
  },
});

'use strict';

/**
 * slack-config router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::slack-config.slack-config', {
  only: ['find']
});

'use strict';

/**
 * telegram-config router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::telegram-config.telegram-config', {
  only: ['find', 'findOne']
});

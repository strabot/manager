'use strict';

/**
 * greeting router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::greeting.greeting', {
  only: ['find']
});

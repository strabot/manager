'use strict';

/**
 * slack-config service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::slack-config.slack-config');

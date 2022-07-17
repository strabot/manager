'use strict';

/**
 * discord-config service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::discord-config.discord-config');

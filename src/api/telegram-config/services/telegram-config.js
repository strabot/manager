'use strict';

/**
 * telegram-config service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::telegram-config.telegram-config');

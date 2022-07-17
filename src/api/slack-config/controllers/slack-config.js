'use strict';

/**
 *  slack-config controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::slack-config.slack-config');

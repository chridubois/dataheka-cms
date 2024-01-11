'use strict';

/**
 * customer-case service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-case.customer-case');

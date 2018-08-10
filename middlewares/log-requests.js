// middleware
const logger = require('./../config/logger');

module.exports = (req, res, next) => {
	logger.info(`logging path: ${req.path}`);
};
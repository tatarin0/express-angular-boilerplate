// metric logger
const logger = require('./../config/logger');

exports.log = (req, res) => {
	logger.info(`
		${req.body.logName},
		${req.body.logMsg},
		${req.body.logLevel}
	`);

	return res.json({
		'success': true,
		'message': 'Metrics Logged Successfully'
	});
}
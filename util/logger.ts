import winston from "winston";

const logger = winston.createLogger({
	transports: [
		new (winston.transports.File)({ filename: "logs/debug.log", level: "debug" }),
		new (winston.transports.Console)({ format: winston.format.combine(winston.format.colorize(), winston.format.simple()) })
	]
});

if (process.env.NODE_ENV !== "production") {
	logger.debug("Logging initialized at debug level");
}

export default logger;
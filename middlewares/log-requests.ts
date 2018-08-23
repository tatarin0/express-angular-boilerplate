// middleware
import express = require("express");
import logger from "../util/logger";

const logRequests: express.RequestHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
	logger.log('info', `${(new Date()).toUTCString()}|${req.method}|${req.url}|${req.ip}`);
	next();
};

export default logRequests;

// middleware
import { Request, RequestHandler, Response, NextFunction } from "express";
import logger from "../util/logger";

const logRequests: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
	logger.log("info", `${(new Date()).toUTCString()}|${req.method}|${req.url}|${req.ip}`);
	next();
};

export default logRequests;

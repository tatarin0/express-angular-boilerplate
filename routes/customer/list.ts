import * as express from "express";

const list = express.Router()
	.get("/list", (req: express.Request, res: express.Response) => {
		res.json({ success: true });
	});

export = list;

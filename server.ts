import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import path from "path";

import logRequests from "./middlewares/log-requests";
import masterRouter from "./routes/index";
import logger from "./util/logger";

const app = express();
const port = 3000;

// security
app.use(helmet({
	frameguard: {
		action: "deny"
	}
}));

// middleware
app.use(bodyParser.json());
app.use(logRequests);

// api router
app.use("/api", masterRouter);

// serve static dist on build and deploy
app.use(express.static("app/dist"));

// avoid hash strategy in angular (match anything thats not api)
app.get("/*", (req: express.Request, res: express.Response) => {
	res.sendFile(path.join(__dirname, "..", "/app/dist/index.html"));
});

// serve node at port listed
app.listen(port, logger.log("info", `Server running on port ${port}`));
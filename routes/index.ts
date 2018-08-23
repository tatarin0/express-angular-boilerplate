import * as express from "express";

// import sub-routers
import customer from "./customer/list";

let router = express.Router();
router.use('/customer', customer);

// Export the router
export = router;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const https = require('https');

const logRequests = require('./middlewares/log-requests')
const metric = require('./routes/metric-logger');

// security
app.use(helmet({
	frameguard: {
		action: 'deny'
	}
}));

// dependencies
app.use(bodyParser.json());

// serve static dist on build and deploy
app.use(express.static('app/dist'));

// middleware for logger
app.use(logRequests);

// apis
app.post('/api/metric', metric.log);

// serve node at port listed
app.listen(3000, () => console.log('Server running on 3000'))
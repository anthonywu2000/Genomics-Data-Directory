const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// set up middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up routes
// pivotal for API requests
const routes = require('./routes');
app.use('/', routes);

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
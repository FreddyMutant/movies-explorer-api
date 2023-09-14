const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('./middlewares/rateLimit');
const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes');
const { APP_PORT, MONGO_DB } = require('./utils/config');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
app.use(requestLogger);
app.use(rateLimit);
app.use(helmet());
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_DB, { useNewUrlParser: true });
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(APP_PORT, () => console.log(`Port ${APP_PORT}`));

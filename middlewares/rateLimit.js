const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
});

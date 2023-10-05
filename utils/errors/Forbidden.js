const { FORBIDDEN } = require('../constants');

class ForbiddenError extends Error {
  constructor(message = FORBIDDEN) {
    super(message);
    this.statusCode = 403;
  }
}

module.exports = ForbiddenError;

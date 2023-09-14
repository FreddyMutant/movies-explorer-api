const { BAD_REQUEST } = require('../constants');

class BadRequestError extends Error {
  constructor(message = BAD_REQUEST) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BadRequestError;

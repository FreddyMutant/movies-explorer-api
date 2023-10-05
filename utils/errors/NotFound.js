const { NOT_FOUND } = require('../constants');

class NotFoundError extends Error {
  constructor(message = NOT_FOUND) {
    super(message);
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;

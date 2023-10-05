const { CONFLICT } = require('../constants');

class ConflictError extends Error {
  constructor(message = CONFLICT) {
    super(message);
    this.statusCode = 409;
  }
}

module.exports = ConflictError;

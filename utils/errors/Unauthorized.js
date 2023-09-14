const { UNAUTHORIZED } = require('../constants');

class Unauthorized extends Error {
  constructor(message = UNAUTHORIZED) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = Unauthorized;

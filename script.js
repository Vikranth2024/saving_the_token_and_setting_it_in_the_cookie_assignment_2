const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  // your code here and return token

  return jwt.sign(payload,secret, {expiresIn:'7d'});

};

const verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    console.log("Token is valid:", decoded);
    return decoded;

  } catch (err) {
    console.error('Token is invalid or expired:', err.message);
    return null;
  }
};

module.exports = { encrypt, verifyToken };

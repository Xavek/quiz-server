const jwt = require("jsonwebtoken");

export default authentication = async (req, res, next) => {
  try {
    let token =
      req.body.token ||
      req.query.token ||
      req.headers["x-access-token"] ||
      req.headers.authorization ||
      req.headers.token;
    if (token && token.length) {
      token = token.replace("Bearer ", "");
      const decode = await jwt.verify(token, secretKey);
      req.user = decode;
      return next();
    }
  } catch (error) {
    next(error);
  }
};

const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    console.log("Authorization header:", authHeader); // Debug log

    const token = authHeader && authHeader.split(' ')[1];
    console.log("Extracted token:", token); // Debug log

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(401);
        req.user = user;
        next();
    });
};

module.exports = {
    authenticateToken,
};

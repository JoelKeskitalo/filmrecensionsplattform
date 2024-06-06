const jwt = require('jsonwebtoken')

const authentication = (req, res, next) => {

    const token = req.header('Authorization').replace('Bearer ', '') // GLÖM INTE DETTA I POSTMAN SEN!!! för helvete 

    if (!token) {
        return res.status(401).json({message: 'Access denied: No token provided!'})
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decodedToken // för över decodedToken "statusen" till request-bodyns user, mao, ge användaren tillåtelse 
        next()

    } catch(error) {
        res.status(400).json({message: 'Invalid token'})
    }
}

const adminAuthentication = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({message: 'Access not granted, admins only.'})
    }
    next()
}

module.exports = {
    authentication,
    adminAuthentication
}
const jwt = require("express-jwt")  // if in its own module the jwt library
                                    // need to be wrapped in express middleware by the expres-jwt module


    const getTokenFromHeaders = ()=>{
        if(req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer"){
        return req.headers.authorization.split(" ")[1]
    } else {
        return null
    }
     // the first part is the string "Bearer" because the protol requires it.
    }

const isAuthenticated = jwt(
    {
        secret: process.env.JWT_SECRET || "secret is missing",
        requestProperty: "payload",
        getToken: getTokenFromHeaders,
        algorithms:["HS256"] // if you have used special algorithms in the encoding, you shold specify here the same algo
    }
    )
    module.exports = isAuthenticated
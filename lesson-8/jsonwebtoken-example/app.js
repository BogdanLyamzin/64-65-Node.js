const jwt = require("jsonwebtoken");
require("dotenv").config();

const {SECRET_KEY} = process.env;

const payload = {
    id: "646f902d285d25931e0e890f"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const {id} = jwt.verify(token, SECRET_KEY);
    // console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmY5MDJkMjg1ZDI1OTMxZTBlODkwZiIsImlhdCI6MTY4NTAzMzY2MiwiZXhwIjoxNjg1MTE2NDYyfQ.-jtOzZBhMFifiOG4JpTlZxdMmkNPQezirSncbdPbNAq";
    jwt.verify(invalidToken, SECRET_KEY);
}
catch(error) {
    console.log(error.message);
}
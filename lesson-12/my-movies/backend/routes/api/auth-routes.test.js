const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");

const {User} = require("../../models/user")

const {DB_HOST_TEST, PORT} = process.env;

describe("test register route", ()=> {
    let server = null;
    beforeAll(async ()=> {
        server = app.listen(PORT);
        await mongoose.connect(DB_HOST_TEST);
    })

    afterAll(async ()=> {
        server.close();
        await mongoose.connection.close();
    })

    beforeEach(async()=> {

    })

    afterEach(async()=> {
        await User.deleteMany({})
    })

    test("test register with correct data", async()=> {
        const registerData = {
            name: "Bogdan",
            email: "bogdan@gmail.com",
            password: "123456"
        };

        const {statusCode, body} = await request(app).post("/api/auth/register").send(registerData);
        expect(statusCode).toBe(201);
        expect(body.user.name).toBe(registerData.name);
        expect(body.user.email).toBe(registerData.email);

        const user = await User.findOne({email: registerData.email});
        expect(user.email).toBe(registerData.email);
    })
})
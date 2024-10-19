// test/index.test.js
import request from "supertest";
import app from "../index.js"; // Import your Express app

describe("GET /", () => {
  it("should return Hello, World!", (done) => {
    request(app)
      .get("/") // Simulate a GET request to the root endpoint
      .expect("Content-Type", /text/)
      .expect(200) // Expect HTTP status 200
      .expect("Hello, World!") // Expect the body to contain 'Hello, World!'
      .end((err, res) => {
        if (err) return done(err); // If there's an error, fail the test
        done(); // If no error, the test passes
      });
  });
});

import request from "supertest";
import { app, server } from "../index.js"; // Import the Express app and server

describe("GET /", () => {
  after((done) => {
    // Close the server after tests are complete
    server.close(done);
  });

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

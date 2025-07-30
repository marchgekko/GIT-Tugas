const {expect} = require("chai");

describe("Post Reqres API", () => {
  it("Should create a new user successfully", async () => {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Shinta",
        job: "Software Engineer"
      }),
    });
    const data = await response.json();
    
    // Check if the response status is 201 Created
    expect(response.status).to.equal(201);
    expect(data.name).to.equal("Shinta");
  });
});

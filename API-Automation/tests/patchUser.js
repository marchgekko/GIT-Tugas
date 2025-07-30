const { expect } = require("chai");

describe("Patch Reqres API", () => {
  it("Should update user data successfully", async () => {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "PATCH",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Shinta",
        job: "Senior Engineer"
      }),
    });

    const data = await response.json();
    
    // Check if the response status is 200 OK
    expect(response.status).to.equal(200);
    expect(data.name).to.equal("Shinta");
    expect(data.job).to.equal("Senior Engineer");
  });
});
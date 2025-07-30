const assert = require("assert");
const { expect } = require("chai");

describe("GET User API Test", function () {
  it("Get User with ID 2 should be successful", async function () {
    const response = await fetch("https://reqres.in/api/users/2");
    const data = await response.json();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.data.first_name, "Janet");

    expect(response.status).to.equal(200);
    expect(data.data.first_name).to.include("Janet");
  });
});




const assert = require("assert");
const { expect } = require("chai");

describe("Delete Reqres API", () => {
  it("Should delete user successfully", async () => {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "DELETE",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Accept": "application/json",
      },
    });
    expect(response.status).to.equal(204); // No Content
 });
});
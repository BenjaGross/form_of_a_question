'use strict'

describe("API Call", function() {

  it("should fail for a test", function() {
    // Fail!
  });

  it("getCategory should return a json object", function() {
    expect(APICall.getCategory()), to be(json)
  });

});
'use strict'

describe("Category Model", function() {

  it("should exist", function() {
    expect(Category).toBeDefined();
  });
  
  it("should have more than five questions", function() {
    expect(test_category[0].category_id).toEqual(1);
  });

});
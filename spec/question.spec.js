'use strict'

describe("Question Model", function() {
  it("should exist", function() {
    expect(Question).toBeDefined();
  });
  it("should have a value", function(){
    expect(test_question.answer).toEqual("skiing");
  });
  it("should have a value", function(){
    expect(test_question.value).toEqual(100);
  });
  it("should have a category", function(){
    expect(test_question.category.title).toEqual("sports");
  });
});
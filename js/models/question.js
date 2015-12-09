var Question = Backbone.Model.extend({
  initialize: function(data){
    this.parseData(data)
    this.set("text", data[text])
    this.set("answer", data[answer])
    this.set("value", data[value])
  },
  markCorrect: function(){
    // add score
  },
  markIncorrect: function(){
    // subtract Score
  },
  parseData: function(){
    // take data from category and turn it into question
  }

});
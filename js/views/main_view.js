var MainView = Backbone.View.extend({
  initialize : function(){
    this.render();
  },
  events: {
    "click .button#getQuestion":     "getQuestion"
  },
  render : function(){
    var html = '<h1>This is the main view yo!</h1>'
    this.$el.append(html);
    return this;
  },
  getQuestion : function(){
    // Calls API and returns a random question
  }
});
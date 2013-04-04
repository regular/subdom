/*
goal: this kind of usage

<html>
  <div class="subdom" name="foo">
    <h1></h1>
  </div>
  <div class="subdom" name="bar">
    <h1></h1>
  </div>
</html>

mySubDom = require("subdom")("foo");

mySubDom(function(dom) {
  dom("h1").html("Foo title"); // only changes h1 in scope 'foo'
});
    
*/


(function() {
  var dom, subdom;

  dom = require("dom");

  subdom = function(new_root) {
    return function(selector, context) {
      return dom(selector, context || new_root);
    };
  };

  module.exports = function(scope_name) {
    var matchingElements;
    matchingElements = dom(".subdom[name=" + scope_name + "]");
    return function(iterator) {
      return matchingElements.each(function(el) {
        return iterator(subdom(el));
      });
    };
  };

}).call(this);

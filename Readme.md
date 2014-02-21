# subdom

  wraps component/dom to isolate a sub branch of the dom, sort of chroot. Useful for widgets

## Installation

    $ component install regular/subdom

## API

This HTML contains two sub doms named `foo` and `bar`

    <html>
      <div class="subdom" name="foo">
        <h1>title goes here</h1>
      </div>
      <div class="subdom" name="bar">
        <h1>title goes here</h1>
      </div>
    </html>

A widget-like component can now create an instance of
component/dom that will only access elements of the named subdom.

    mySubDom = require("subdom")("foo");

    mySubDom(function(dom, el) {
      // el is the non component/dom wrapped subdom element
      dom("h1").html("Foo title"); // only changes h1 in scope 'foo'
    });
   
## License

  MIT

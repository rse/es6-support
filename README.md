
# ECMAScript 6

## Support Hints &amp; Examples

This is a small collection of hints and examples to show how ECMAScript 6
can be used today in practice in various scenarios.

### Examples

- *[app-browser-buildproc](./app-browser-buildproc/)*:<br/>
  This shows a browser application, based on a Grunt-based build process.
  The key points are: [Grunt](http://gruntjs.com/) uses
  [Browserify](http://browserify.org/) which itself uses the Browserify
  plugin [Babelify](https://github.com/babel/babelify) to transpile ES5
  to ES6 with [Babel](http://babeljs.io/).

- *[app-browser-onthefly](./app-browser-onthefly/)*<br/>
  This shows a browser application, using on-the-fly transpiling.
  The key points are: it includes [Babel](http://babeljs.io/)'s
  `browser.js` (which is a Browserify'ed Babel distribution)
  and then includes the ES6 application code `app.js` with
  MIME-type `text/babel` instead of `text/javascript`.

- app-node-buildproc

- app-node-onthefly

- grunt-onthefly

- lib-node-browser-buildproc

### Tools

- WebStorm
- Sublime Text
- Vim


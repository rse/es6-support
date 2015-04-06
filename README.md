
# ECMAScript 6

## Support Hints &amp; Examples

This is a small collection of hints and examples to show how ECMAScript 6
can be used today in practice in various scenarios.

### Examples

- [app-browser-onthefly](./app-browser-onthefly/)<br/>
  This shows a browser application, using on-the-fly transpiling.
  The key points are: it includes [Babel](http://babeljs.io/)'s
  `browser.js` (which is a Browserify'ed Babel distribution)
  and then includes the ES6 application code `app.js` with
  MIME-type `text/babel` instead of `text/javascript`.
  This is not recommended for production scenarios.

- [app-browser-buildproc](./app-browser-buildproc/):<br/>
  This shows a browser application, based on a [Grunt](http://gruntjs.com/)-based build process.
  The key points are: [Grunt](http://gruntjs.com/) uses
  [Browserify](http://browserify.org/) which itself uses the Browserify
  plugin [Babelify](https://github.com/babel/babelify) to transpile ES5
  to ES6 with [Babel](http://babeljs.io/).
  This is recommended for production scenarios.

- [app-node-buildproc](./app-node-buildproc/)<br/>
  This shows a [Node.js](http://nodejs.org/)/[IO.js](http://iojs.org)-based server application,
  based on a [Grunt](http://gruntjs.com/)-based build process.
  The key points are: [Grunt](http://gruntjs.com/) uses its plugin
  [Grunt-Babel]([https://www.npmjs.com/package/grunt-babel) transpile
  ES5 to ES6 with [Babel](http://babeljs.io/).
  This can be used for production scenarios.

- [app-node-onthefly](./app-node-onthefly/)<br/>
  This shows a [Node.js](http://nodejs.org/)/[IO.js](http://iojs.org)-based server application,
  using on-the-fly transpiling.
  The key points are: it uses an ES5-based boot script `app.js` which
  activates [Babel](http://babeljs.io/)'s `require` hook which on
  subsequent `require` calls on-the-fly transpiles all ES6 to ES5 code.
  This can be used for production scenarios, as server startup times
  usually do not matter such much.

- [grunt-onthefly](./grunt-onthefly/)<br/>
  This shows a [Grunt](http://gruntjs.com/)-based build process where
  ES6 is used for the build script.
  The key points are: it uses an ES5-based boot script `Gruntfile.js` which
  activates [Babel](http://babeljs.io/)'s `require` hook which on
  subsequent `require` calls on-the-fly transpiles all ES6 to ES5 code.
  This can be used for production scenarios.

- [lib-node-browser-buildproc](lib-node-browser-buildproc])<br/>
  This shows a library for use within [Node.js](http://nodejs.org/)/[IO.js](http://iojs.org)-based server
  environments or within browser environments.
  It is based on a [Grunt](http://gruntjs.com/)-based build process.
  The key points are: [Grunt](http://gruntjs.com/) uses
  [JSHint](http://jshint.com/) (with its `esnext` option enabled) and
  [ESLint](http://eslint.org/) (with the [Babel-ESLint](https://github.com/babel/babel-eslint) plugin activated)
  to lint all ES6 sources. Then it uses
  [Browserify](http://browserify.org/), which itself uses the
  Browserify plugin [Babelify](https://github.com/babel/babelify),
  to transpile all ES5 library code to ES6 with
  [Babel](http://babeljs.io/). Additionally, it uses the plain
  [Grunt-Babel]([https://www.npmjs.com/package/grunt-babel) plugin to
  transpile [Mocha](http://mochajs.org/)-based ES5 test code to ES6
  with [Babel](http://babeljs.io/). This is recommended for production
  scenarios.

### Tools

- WebStorm
- Sublime Text
- Vim


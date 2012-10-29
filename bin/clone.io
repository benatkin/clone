#!/usr/bin/env node

var github = require('../lib/github');

var usage = 'Usage: clone.io <url>';

var programArgs = process.argv.slice(2);
if (programArgs.length == 1) {
  var url = programArgs[0];
  var resource = github.resolve(url);
  if (resource) {
    console.log('Not yet implemented');
  } else {
    console.error('The URL you provided was not recognized');
    process.exit(1);
  }
} else {
  console.error(usage);
  process.exit(1);
}

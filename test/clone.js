var expect = require('chai').expect
  , clone = require('../lib/clone')
  , github = require('../lib/github');

describe('clone()', function() {
  it('should error when a file already exists', function() {
    var repo = github.resolve('https://github.com/resources/test');
    clone.create(repo, function(err, clone) {
      expect(err).to.be.ok;
    });
  });
});

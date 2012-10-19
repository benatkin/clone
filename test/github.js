var expect = require('chai').expect
  , github = require('../lib/github');

describe('resolve()', function() {
  var repoUrl = 'https://github.com/resources/clone.io'
    , apiUrl = 'https://api.github.com/repos/resources/clone.io';

  it('should resolve a github repository url', function() {
    expect(github.resolve(repoUrl)).to.be.ok;
  });

  it('should not resolve a non-github repository url', function() {
    expect(github.resolve('http://example.com/')).to.not.be.ok;
  });

  xit('should return a match with the API url', function() {
    expect(github.resolve(repoUrl)).to.have.property('url');
    expect(github.resolve(repoUrl).url).to.equal(apiUrl);
  });
});

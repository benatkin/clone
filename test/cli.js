var expect = require('chai').expect
  , path = require('path')
  , binPath = path.join(path.dirname(__dirname), 'bin', 'clone.io')
  , child_process = require('child_process');

function runCloneio(args, callback) {
  var args = [binPath].concat(args)
    , child = child_process.spawn('node', args)
    , output = { stdout: '', stderr: '', combined: '' };
  for (var streamName in {stdout: null, stderr: null}) {
    (function(stream, streamName) {
      stream.setEncoding('utf8');
      stream.on('data', function(data) {
	output[streamName] += data;
	output['combined'] += data;
      });
    })(child[streamName], streamName);
  }
  child.on('exit', function(code) {
    callback(code, output);
  });
}

describe('cli', function() {
  it("should execute the script", function(done) {
    runCloneio([], function(code, output) {
      expect(output.combined).to.not.match(/cannot find module/i);
      done();
    })
  });

  it("should print a usage message when no argument is given", function(done) {
    runCloneio([], function(code, output) {
      expect(output.combined).to.match(/usage/i);
      done();
    });
  });

  it("should have the bin script in the package", function() {
    expect(require('../package')).to.have.property('bin');
  });
  
  it("should accept a url as the first argument", function(done) {
    runCloneio(['https://github.com/resources/clone.io'], function(code, output) {
      expect(code).to.equal(0);
      expect(output.combined).to.not.match(/usage/i);
      expect(output.combined).to.not.match(/not recognized/i);
      done();
    });
  });
  
  it("should say so when a URL isn't recognized", function(done) {
    runCloneio(['http://example.com/'], function(code, output) {
      expect(code).to.not.equal(0);
      expect(output.combined).to.match(/not recognized/i);
      done();
    });
  });
})

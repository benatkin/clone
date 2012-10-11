var expect = require('chai').expect
  , path = require('path')
  , binPath = path.join(path.dirname(__dirname), 'bin', 'clone.io')
  , child_process = require('child_process');

function runCloneio(args, callback) {
  var args = [binPath].concat(args)
    , child = child_process.spawn('node', args)
    , output = { stdout: '', stderr: '', combinded: '' };
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
  });

  it("should print a usage message when no argument is given", function(done) {
    var child = child_process.spawn('node', [binPath, 'https://github.com/resources/clone.io']);
    child.on('exit', function(code) {
      expect(code).to.equal(0);
      done();
    });
  });
  
  it("should accept a url as the first argument", function(done) {
    var child = child_process.spawn('node', [binPath, 'https://github.com/resources/clone.io']);
    child.on('exit', function(code) {
      expect(code).to.equal(0);
      done();
    });
  });
})

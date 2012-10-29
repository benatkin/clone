var fs = require('fs')
  , path = require('path');

exports.create = create;

function create(resource, callback) {
  var clonePath = path.join(process.cwd, resource.name);
  fs.exists(clonePath, function(exists) {
    if (exists) {
      callback(new Error('A file already exists at ' + clonePath + '.'));
    } else {
      callback(null, clonePath);
    }
  });
}

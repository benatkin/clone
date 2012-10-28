exports.resolve = resolve;
exports.Repository = Repository;

function resolve(url) {
  var match = /^https:\/\/github.com\/([^\/]+)\/([^\/]+)\/?$/.exec(url);
  if (match) {
    return new Repository({username: match[1], name: match[2]});
  } else {
    return null;
  }
}

function Repository(attributes) {
  this.username = attributes.username;
  this.name = attributes.name;
  this.url = "https://api.github.com/repos/" + this.username + "/" + this.name;
}

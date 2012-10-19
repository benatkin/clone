exports.resolve = resolve;

function resolve(url) {
  return /https:\/\/github.com\/[^\/]+\/[^\/]\/?/.exec(url)
}

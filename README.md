# clone.io

A simple way to work with remote data.

# walkthrough

## installing

Install [clone.io](http://clone.io/).

``` bash
$ npm install -g clone.io
```

## cloning a resource

Clone a resource using its url. The JSON will be pretty-printed, and the information needed to update it will be added if it doesn't already exist. If it's a hypermedia API, like GitHub, the url in the original request will be used.

``` bash
$ cd ~/Desktop
$ clone.io https://github.com/resources/clone.io
Getting https://api.github.com/repos/resources/clone.io.json...
Cloning https://github.com/resources/clone.io.git
$ ls -A1p
clone.io
$ ls -A1p clone.io
.clone/
code/
index.json
issues/
wiki/
```

Note that the command appears after the resource. This makes it easy to perform a different command on the same resource.

## getting an updated copy

To update the local resource and subresources from the remote resource, call `pull`:

``` bash
$ clone.io pull
```

# license

[MIT](http://benatkin.mit-license.org/).


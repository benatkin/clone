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
$ clone.io https://github.com/visionmedia/mocha
Getting https://api.github.com/repos/visionmedia/mocha...
Cloning https://github.com/visionmedia/mocha.git
$ ls -A1p
mocha
$ cd mocha
$ ls -A1p
.clone/
code/
index.json
```

Note that the command appears after the resource. This makes it easy to perform a different command on the same resource.

## getting an updated copy

To update the local resource and subresources from the remote resource, call `pull`:

``` bash
$ clone.io pull
(output here)
```

## getting more subresources

``` bash
$ clone.io ls
./
./code
./issues
./wiki
$ clone.io ./issues get
Getting https://api.github.com/repos/visionmedia/mocha/issues...
$ clone.io ./wiki get
Cloning https://github.com/visionmedia/mocha.wiki.git
$ ls -A1p
.clone/
code/
index.json
issues/
$ ls -A1p issues/ | head -n 3
01.json
02.json
03.json
```

# license

[MIT](http://benatkin.mit-license.org/).


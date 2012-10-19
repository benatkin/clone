# clone.io

A simple way to work with remote data.

# walkthrough

## installing

Install [clone.io](http://clone.io/).

``` bash
$ npm install -g clone.io
```

## cloning a resource

Clone a resource using its url. The JSON will be pretty-printed, and
the information needed to update it will be added if it doesn't
already exist. If it's a hypermedia API, like GitHub, the url in the
original request will be used.

``` bash
$ cd ~/Desktop
$ clone.io https://github.com/resources/clone.io get
$ ls -A1p
clone.io.json
```

Note that the command appears after the resource. This makes it easy
to perform a different command on the same resource.

## getting an updated copy

The first argument can either be a URL or a file. The local file
contains a link to the remote resource, so it can be used to perform
actions involving both the local and remote resource. To update the
local resource, call `get`:

``` bash
$ clone.io clone.io.json get
```

## editing and patching

First, open index.json in an editor and change the description. If you
like, you can use $EDITOR:

``` bash
$ clone.io clone.io.json edit
```

Now you can view a diff, which uses jsonpointer:

``` bash
$ clone.io clone.io.json diff
https://api.github.com/repos/resources/clone.io#/description
  - "A way to work with remote data using your own tools on your own filesystem."
  + "a simple way to work with remote data"
```

Now that you know what is going to change, you can patch it on the server:

``` bash
$ clone.io clone.io.json patch
Patching https://api.github.com/repos/resources/clone.io...
Enter GitHub username:
Enter GitHub password:
Successfully patched https://api.github.com/repos/resources/clone.io.
```

# status

Not yet implemented. Starting with github project data.

# license

[MIT](http://benatkin.mit-license.org/).

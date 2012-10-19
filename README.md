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

## viewing information about a resource

The first argument can either be a URL or a file. The local file
contains a link to the remote resource, so it can be used to perform
actions involving both the local and remote resource. 

Running the command with just the name of the file:

``` bash
$ cd ~/Desktop
$ clone.io clone.io.json
```

Will print out the following YAML:

``` yaml
url:  https://github.com/resources/clone.io
type: /services/github/repo
subresources:
  - clone.io clone.io.json ./code get
  - clone.io clone.io.json ./issues get
  - clone.io clone.io.json ./wiki get
  - clone.io clone.io.json get --all
actions:
  - clone.io clone.io.json get    # update clone.io.json
  - clone.io clone.io.json diff   # compare local and remote resource
  - clone.io clone.io.json patch  # patch remote resource with local updates
  - clone.io clone.io.json show   # pretty-print the data
```

## getting an updated copy

To update the local resource from the remote resource, call `get`:

``` bash
$ clone.io clone.io.json get
```

TODO: provide a tool or recommend a practice to preserve the old data.

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

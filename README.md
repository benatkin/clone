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
$ clone.io get https://github.com/resources/clone.io
$ ls -A1p
clone.io.json
```

## editing and patching

First, open index.json in an editor and change the description. Now
you can view a diff, which uses jsonpointer:

``` bash
$ clone.io diff index.json
https://api.github.com/repos/resources/clone.io#/description
  - "A way to work with remote data using your own tools on your own filesystem."
  + "a simple way to work with remote data"
```

Now that you know what is going to change, you can patch it on the server:

```
$ clone.io patch index.json
Patching https://api.github.com/repos/resources/clone.io...
Enter GitHub username:
Enter GitHub password:
Successfully patched https://api.github.com/repos/resources/clone.io.
```

# status

Not yet implemented. Starting with github project data.

# license

[MIT](http://benatkin.mit-license.org/).

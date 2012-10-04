# clone.io

A tool for cloning resources and their subresources, and operating on
them (both the clones and the origins) in a manner similar to git.

# installing

``` bash
$ npm install -g clone.io
```

# listing types of resources

``` bash
$ clone.io list
git
github
```

# viewing the url matchers

``` bash
$ clone.io github
domain: github.com
matchers:
  user: https://github.com/:username
  repo: https://github.com/:username/:repo
```

# cloning

## big resource

This will create a git repository in a directory called substack,
download and commit his metadata, and clone all of his repositories
into it.

``` bash
$ clone.io https://github.com/substack
```

## smaller resource

This will clone express, add `/issues` and `/wiki` to
`.git/info/exclude`, create an issues repository and use the GitHub
API to pull down the issues and commit them as YAML files, and clone
the wiki into the wiki directory.

``` bash
$ clone.io http://github.com/visionmedia/express
```

## getting the rest

Note that when cloning github user account (a big resource), it
doesn't pull in as much of each repository (a smaller subresource) as
cloning an individual repository does. To get the rest of a
repository, after grabbing by cloning the user's account:

``` bash
$ clone.io http://github.com/substack
$ cd substack/traverse
$ ls -d issues
ls: issues: No such file or directory
$ clone.io pull
$ ls -d issues
issues
```

# updating

You guessed it! It will pull down the default amount of data for the
level of resource plus whatever's been pulled down so far.

``` bash
$ clone pull
```

# status

Not yet implemented. Needs at least one child service implemented
first.

# todo

* Make the CLI design a closer match to git
* Design the CLI to pull down less by default
* Separate cloning more resources from updating the resources already
  cloned
* Keep the services and the commands separate
* Implement a child service
* Implement integration

# license

[MIT](http://benatkin.mit-license.org/).

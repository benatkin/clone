# clone.io

A tool for cloning resources and their subresources, and operating on
them (both the clones and the origins) in a manner similar to git.

# synopsis

``` bash
$ npm install -g clone.io
$ clone.io https://github.com/benatkin
Getting user data...
Getting repo list...
Getting recent activity...
$ cd benatkin
$ ls -A1p
.git
benatkin.yml
clone.yml
repos/
stream/
$ clone.io get repos:popular
Getting 10 most starred repos...
$ clone.io get repos:recent
Getting 10 most recent repos...
$ vi benatkin.yml  # change bio
$ clone.io status
benatkin.yml modified; push with clone.io push benatkin
$ clone.io push benatkin
Are you benatkin? (y/n) y
Getting authenticated user record...
Enter password for user benatkin:
Patching authenticated user record...
```

The repo metadata will be in `benatkin/repos/reponame.yml` but cloned
repos will be in `benatkin/reponame` to make them easier to access.

The repos will have an extra level of nesting for issues and
wikis. The directory for the main repository will most likely be
called `code`.

The `clone.yml` file will contain data pertaining to the clone.

Non-git data in clones will be versioned with git, autocomitted by
`clone.io`. It will attempt to make the versioning represent the real
changes to non-git data. It may use separate branch(es) to keep track
of changes that fail to update.

# status

Not yet implemented. Needs at least one child service implemented
first.

# todo

* Keep the services and the commands separate
* Implement a child service
* Implement integration

# license

[MIT](http://benatkin.mit-license.org/).

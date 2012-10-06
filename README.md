# clone.io

A way to work with remote data using your own tools on your own
filesystem.

# synopsis

``` bash
$ npm install -g clone.io
$ clone.io https://github.com/resources/clone.io
Getting https://api.github.com/repos/resources/clone.io...
$ cd clone.io
$ ls -A1p
project.yml
clone.yml
$ vi project.yml  # change description
$ clone.io status
benatkin.yml modified; push with clone.io push benatkin
$ clone.io push benatkin
Patching https://api.github.com/repos/resources/clone.io...
Enter GitHub username:
Enter GitHub password:
Patching...
$ clone.io list issues  # list the issues
<snip>
$ clone.io get issue 1
Getting https://api.github.com/repos/resources/clone.io/issues/1...
$ ls issues/
1-implement-cloning-a-public-github-project.yml
```

# clone.yml

At a minimum, `clone.yml` contains a `url` property, that can be used
to fetch more data. Another thing it may contain is the username
needed to update the data.

As a general rule there will be one `clone.yml` file for each resource
that needs to be uniquely identified. For example, a github user and
an individual github repository would have a `clone.yml` field, but
the repos for a github user wouldn't, because if you know the API url
for a github user you can use that to find the API url for the repos.

Any directory containing clone.yml ought to be relocatable. That way
two clone directories for resources on different services can exist
in the same parent directory.

# status

Not yet implemented. Starting with github project data.

# license

[MIT](http://benatkin.mit-license.org/).

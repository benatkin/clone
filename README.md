# clone.io

A way to work with remote data using your own tools on your own
filesystem.

# synopsis

``` bash
$ npm install -g clone.io
$ clone.io https://github.com/benatkin
Getting user data...
$ cd benatkin
$ ls -A1p
benatkin.yml
clone.yml
$ vi benatkin.yml  # change bio
$ clone.io status
benatkin.yml modified; push with clone.io push benatkin
$ clone.io push benatkin
Are you benatkin? (y/n) y
Getting authenticated user record...
Enter password for user benatkin:
Patching authenticated user record...
$ clone.io list repos  # list most recent repos
<snip>
$ clone.io get json2js
Getting repo data...
Getting repo code...
$ ls -A1p json2js/
clone.yml
code/
json2js.yml
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

Not yet implemented. Needs at least one child service implemented
first.

# todo

* Keep the services and the commands separate
* Implement a child service
* Implement integration

# license

[MIT](http://benatkin.mit-license.org/).

# clone.io

A tool for cloning resources and their subresources, and operating on
them (both the clones and the origins) in a manner similar to git.

# synopsis

``` bash
$ npm install -g clone.io
$ clone.io https://github.com/benatkin
Getting user data...
$ cd benatkin
$ ls -A1p
.git
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

# status

Not yet implemented. Needs at least one child service implemented
first.

# todo

* Keep the services and the commands separate
* Implement a child service
* Implement integration

# license

[MIT](http://benatkin.mit-license.org/).

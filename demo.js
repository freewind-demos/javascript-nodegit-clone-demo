const Git = require('nodegit')

Git.Clone('https://github.com/freewind-demos/javascript-frontend-hello-world-demo.git', './local-repo/javascript-frontend-hello-world-demo')
    .then(function (repo) {
        return repo.getBranchCommit('master')
    })
    .then(function (commit) {
        return commit.message()
    })
    .then(function (message) {
        console.log('latest commit: ' + message)
    })
const Git = require('nodegit')

Git.Clone('https://github.com/freewind-demos/javascript-frontend-hello-world-demo.git', './local-repo/javascript-frontend-hello-world-demo')
    .then(function (repo) {
        console.log('cloned to: ./local-repo/javascript-frontend-hello-world-demo')
        return repo.getBranchCommit('master')
    })
    .then(function (commit) {
        console.log('Got master latest commit: ' + commit)
        return commit.message()
    })
    .then(function (message) {
        console.log('latest commit message: ' + message)
    })
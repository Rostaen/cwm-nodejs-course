const getUser = (id, callback) => {
    setTimeout(() => {
        console.log('Reading a user from the databse...');
        callback({id: id, getHubUsername: 'Andrew'});
    }, 2000);
};

const getRespositories = (username, callback) => {
    setTimeout(() => {
        console.log(`Calling GitHub API...`);
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

const getRepositories = user => {
    getRespositories(user.gitHubUsername, getCommits);
}

const getCommits = (repos) => {
    getCommits(repo, displayCommits);
}

const displayCommits = commits => {
    console.log(commits);
};

console.log('Before');
getUser(1, getRepositories);
console.log('After');

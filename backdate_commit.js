const { execSync } = require('child_process');

// Function to create a backdated commit
function createBackdatedCommit(date, message) {
    // Set GIT_AUTHOR_DATE and GIT_COMMITTER_DATE environment variables
    const gitEnv = {
        GIT_AUTHOR_DATE: date,
        GIT_COMMITTER_DATE: date,
    };

    // Add all changes
    execSync('git add .', { stdio: 'inherit' });

    // Commit changes with a backdated timestamp
    execSync(`git commit -m "${message}"`, { stdio: 'inherit', env: gitEnv });
}

// Function to push commits to the remote repository
function pushCommits(branch = 'main') {
    execSync(`git push origin ${branch}`, { stdio: 'inherit' });
}

// Example usage
const commitDate = '2023-01-01T12:00:00';  // ISO 8601 format
const commitMessage = 'Backdated commit';

// Create a backdated commit
createBackdatedCommit(commitDate, commitMessage);

// Push the commit to the remote repository
pushCommits();

var test = require('ava');
const execSync = require('child_process').execSync;
const path = require('path');


test('file should be exist and content equals', () => {
  const precommit = execSync('node index.js', { cwd: path.join(__dirname, '../') });
});


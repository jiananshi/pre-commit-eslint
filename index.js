const path = require('path');
const fs = require('fs');
const PRECOMMIT_FILE = './pre-commit.txt';
const ESLINT_FILE = './eslintrc.txt';

let root = path.resolve(__dirname, '..', '..');
let hookDir = path.resolve(root, '.git', './hooks');

const ESLINT_FILE_TARGET = path.resolve(root, './.eslintrc');

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function writeFile(raw, target) {
  return new Promise((resolve, reject) => {
    fs.writeFile(target, raw, { mode: '0755' }, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

function checkFile(target) {
  return new Promise((resolve, reject) => {
    fs.stat(target, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

readFile(PRECOMMIT_FILE)
  .then(raw => writeFile(raw, `${hookDir}/pre-commit`))
  .then(() => console.log('Git pre-commit set up success!'))
  .catch(e => console.log(`Git pre-commit set up fail due to: ${e}`))

checkFile(ESLINT_FILE_TARGET)
  .catch(() => {
    return readFile(ESLINT_FILE)
      .then(raw => writeFile(raw, ESLINT_FILE_TARGET));
  })
  .then(() => console.log('Eslintrc set up success!'))
  .catch(e => console.log(`Eslintrc set up fail due to: ${e}`));

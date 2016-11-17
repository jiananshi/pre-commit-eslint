const path = require('path');
const fs = require('fs');

let root = path.resolve(__dirname, '..', '..');
let hookDir = path.resolve(root, '.git', './hooks');

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('./pre-commit.txt', 'utf8', (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function writeFile(raw) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${hookDir}/pre-commit`, raw, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

readFile()
  .then(writeFile)
  .then(() => console.log('Git pre-commit set up success!'))
  .catch(e => console.log(`Git pre-commit set up fail due to: ${e}`));

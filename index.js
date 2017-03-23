import path from 'path';
import fs from 'fs';
import promisify from './promisify';

const PRECOMMIT = './pre-commit.sh';
const ESLINT = './.eslintrc';

// will be installed at `node_modules`
const root = process.env === 'test ' ? path.resolve(__dirname, '..', '..') : __dirname;
const ESLINT_TARGET = path.resolve(root, './.eslintrc');
// in case current user can't read
const mode = '0755';

['readFile', 'writeFile', 'stat'].forEach(method => fs[method] = promisify(fs[method]));

fs.readFile(PRECOMMIT, 'utf8')
  .then(raw => fs.writeFile(`${path.resolve(root, '.git/hooks')}/pre-commit`, raw, { mode }))
  .then(() => console.log('Git pre-commit set up success!'))
  .catch(e => console.log(`Git pre-commit set up fail due to: ${e}`));

fs.stat(ESLINT_TARGET)
  .catch(() => fs.readFile(ESLINT).then(raw => fs.writeFile(raw, ESLINT_TARGET, { mode })))
  .then(() => console.log('Eslintrc set up success!'))
  .catch(e => console.log(`Eslintrc set up fail due to: ${e}`));


const program = require('commander');
const clipboardy = require('clipboardy');
const options = program.opts();
const generatePassword = require('./utils/generatePassword');
const savePassword = require('./utils/savePassword');
const generateLog = console.log;

program
  .version('1.0.0')
  .description(
    'Your Simple Password Generator. Add ton of option and make it fun to use'
  );

program
  .option('-s, --save', 'Save your Password to generatedPassword.txt ')
  .option('-l, --length <number>', 'Password Length', '10')
  .option('-nn, --no-numbers', 'Remove Password Numbers')
  .option('-ns, --no-symbols', 'Remove Password Symbols')
  .parse();

const { save, numbers, length, symbols } = options;

const createPassword = generatePassword(save, length, numbers, symbols);

if (save) savePassword(createPassword);

clipboardy.writeSync(createPassword);

generateLog(createPassword);
generateLog('Password added to clipboard');

const fs = require('fs');
const path = require('path');
const os = require('os');

const savePassword = (password) => {
  fs.open(
    path.join(__dirname, '../', 'savedPassword.txt'),
    'a',
    666,
    (e, id) => {
      fs.write(id, password + os.EOL, null, 'utf-8', () => {
        fs.close(id, () => {
          console.log('Password added to savedPassword.txt');
        });
      });
    }
  );
};

module.exports = savePassword;

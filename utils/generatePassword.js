const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const generatePassword = (length, hasSymbols, hasNumbers, hasChars) => {
  let letters = alpha;

  hasSymbols ? (letters += symbols) : '';
  hasNumbers ? (letters += numbers) : '';
  hasChars ? (symbols += numbers) : '';

  return (createPassword = (length, letters));
};

const createPassword = (length, letters) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return password;
};

module.exports = generatePassword;

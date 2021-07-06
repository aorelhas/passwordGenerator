const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const generatePassword = (
  length = 10,
  hasSymbols = true,
  hasNumbers = true,
  hasChars = true
) => {
  let letters = alpha;
  let num = numbers;

  hasSymbols ? (letters += symbols) : '';
  hasNumbers ? (letters += numbers) : '';
  hasChars ? (num += symbols) : '';

  return createPassword(length, letters);
};

const createPassword = (length, letters) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return password;
};

module.exports = generatePassword;

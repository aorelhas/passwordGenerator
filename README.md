# Password Generator
### _Generate a safe password for your needs_

## Features

- Create a password with the length you need
- Create a password withouth symbols
- Create a password withouth numbers
- Save your passwords in a .txt file
- Create a symlink and run from anywhere

## Installation
Install the dependencies and create a symlink

```sh
npm install
npm link
```

Option to run the file

```sh
passgen [options]
```

Disable symlink
```sh
npm unlink
```

## Available options

Options on how to use them in your own application are linked below.

| Option | Description
| ------ | ------ 
| -h | Display help commands |
| -s | Save password to .txt file |
| -nn | Remove numbers from password |
| -ns | Remove Symbols from password |
| -l | Password Length (default is 10) |
| -v | Display Version |

## Contribute

Want to contribute? Great!
Feel free to contribute for this project.
![Windows](https://img.shields.io/badge/-Windows-blue?logo=windows)
![MacOS](https://img.shields.io/badge/-MaOS-lightgrey?logo=apple)
![Linux](https://img.shields.io/badge/-Linux-orange?logo=linux)
![Node](https://img.shields.io/node/v/@screw-hand/cli)
![npm](https://img.shields.io/npm/v/@screw-hand/cli)
![codecov](https://codecov.io/gh/screw-hand/cli/branch/main/graph/badge.svg)

# cli

cli of utils. a cross-platform command-line interface (CLI) utilities toolkit powered by Node.js. simplify and enhance the daily development experience for developers by providing a suite of powerful, efficient, and user-friendly CLI tools.

Supported Windows, Linux, or MacOS.

# Install

```shell
npm i -g @screw-hand/cli
```

## Usage

```shell
$ cli
Usage: cli / cli-me [options] [command]

cli of utils.

Options:
  -V, --version                                       output the version number
  -h, --help                                          display help for command

Commands:
  json-file|json <string> <filename>                  make object or json string to a json file
  string-to-arr|s2a [options] <string>                make string join in array with character, will default copy to clipboard
  generate-code|gc [options] <template> <configList>  generate code
  help [command]                                      display help for command
```

# Examples

The [example](./example) directory where you can find example.

- `[command]-cli.js` using by cli
- `[command]-fn.js` using by Node.js

# How to run examples ?

```shell
node example/[command]-(fn|cli).js
```

# Local Run

```shell
git clone https://github.com/screw-hand/cli.git
```

```shell
nvm install
nvm use
npm i -g pnpm@8.6.7
pnpm i
pnpm link --global
cli --help
cli --version
```

# Publish

```shell
npm i -g nnrm
nrm use npm
npm login
npm whoami
npm run publish:[**]
```

```shell
npm publish --access=public
```

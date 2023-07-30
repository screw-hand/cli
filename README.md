![Windows](https://img.shields.io/badge/-Windows-blue?logo=windows)
![MacOS](https://img.shields.io/badge/-MaOS-lightgrey?logo=apple)
![Linux](https://img.shields.io/badge/-Linux-orange?logo=linux)
![Node](https://img.shields.io/node/v/@screw-hand/cli)
![npm](https://img.shields.io/npm/v/@screw-hand/cli)

# cli

cli of utils. a cross-platform command-line interface (CLI) utilities toolkit powered by Node.js. Our goal is to simplify and enhance the daily development experience for developers by providing a suite of powerful, efficient, and user-friendly CLI tools.

Since our project is developed with Node.js, it has excellent cross-platform compatibility. Whether you're developing on Windows, Linux, or MacOS, you can conveniently use our utilities toolkit.

# Install

```shell
npm i -g @screw-hand/cli
```

## Usage

```shell
cli / cli-me [options] [command]
```

## Options

`-V, --version`: Output the version number
`-h, --help`: Display help for command

## Commands

`json-file|json <string> <filename>`: Make object or JSON string to a JSON file
`help [command]`: Display help for a specific command. If no command is specified, display help for all commands.

# Examples

The [example](./example) directory where you can find example.

- `cli-[command].js` for cli
- `fn-[command].js` for Node.js

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

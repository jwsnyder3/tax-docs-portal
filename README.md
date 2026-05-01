# Secure Tax Docs Portal

## Summary

This application is a Proof-of-Concept for a tax documentation portal. When the application is complete, it will be a web-based platform for customers of STAbill to communicate with their assigned accountants. The platform gives clients the ability to upload tax documents and receipts for their accountants to review, as well as to communicate directly with their accountants. When it is running, it can be accessed via the browser. More details will be provided here as the application is developed.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [DBeaver](https://dbeaver.io/) (community edition)
- [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install#install-wsl-command) (if on Windows)

## Installation

1. Clone this repository

```shell
git clone git@github.com:/cgtfarmer/tax-docs-portal.git
```

2. Build the images

```shell
docker compose build
```

## Development

1. Bring up the stack

```shell
docker compose up -d
```

2. (Optional) Tail container logs (Ctrl+C to exit)

```shell
docker compose logs -f
# OR
docker compose logs -f frontend
# OR
docker compose logs -f backend
```

3. Check if the app is working end-to-end

Test the frontend here: http://localhost

4. Bring down the stack

```shell
docker compose down
```

## Playwright

If you currently have ASDF installed you should be fine as long as it is pointed to on PATH, otherwise
Otherwise just skip this section and just install asdf using Go. This should be done in WSL or terminal.

Check if you have asdf:

```shell
asdf --version
```

if it is an older version (before version 16)  just remove it and then reinstall using Go:

To uninstall asdf:

Check your ~/.bashrc file

```shell
code ~/.bashrc
```

Remove any lines at end of file containing asdf, or asdf.sh, such as:

```shell
. "$HOME/.asdf/asdf.sh"
. "$HOME/.asdf/completions/asdf.bash"
```

Close ~/.bashrc and then remove asdf directory and config files like below.

```shell
rm -rf "${ASDF_DATA_DIR:-$HOME/.asdf}"

rm -rf "$HOME/.tool-versions" "$HOME/.asdfrc"
```

Use these commands to install Go on WSL:

```shell
sudo apt update && sudo apt upgrade -y
sudo apt install golang-go
go version
```
 
```shell
go install github.com/asdf-vm/asdf/cmd/asdf@v0.18.0
```

Add these exports to ~/.bashrc, or ~/.zschrc (I think for MacOS?)
```shell
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```

Close your WSL terminal and open again to ensure the changes are in effect.

## Check asdf is installed:

```shell
asdf --version
```

## Once asdf is installed add these plugins:

## Add Java

```shell
asdf plugin add java

asdf install java corretto-21.0.7.6.1
```
## Add Node.js

```shell
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git

asdf install nodejs 20.16.0
```
## Add Ruby

```shell
asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git

sudo apt-get install autoconf patch build-essential rustc libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libgmp-dev libncurses5-dev libffi-dev libgdbm6 libgdbm-dev libdb-dev uuid-dev

sudo apt-get install libpq-dev

asdf install ruby 3.3.4
```
## Set Java, Node, and Ruby as global using:

Use this to know your versions:
```shell
asdf list nodejs
asdf list ruby
asdf list java
```

Set the version you need as the global using:

```shell
asdf set --home nodejs 20.16.0
asdf set --home ruby 3.3.4
asdf set --home java corretto-21.0.7.6.1
```
Replace the version numbers with your respective versions.
 
Then go into the tests/backend/ directory.

Attempt this:

```shell
npm install
```

If it does not work then the asdf shims may not be on PATH

Add this to the  ~/.bashrc, or .zschrc

```shell
export PATH="$HOME/.asdf/shims:$HOME/go/bin:$PATH"
```

```shell
npm run test
```

## References

[Connecting to the DB](https://github.com/cgtfarmer/tax-docs-portal/wiki/Connecting-to-the-DB)

[Docker Commands](https://github.com/cgtfarmer/tax-docs-portal/wiki/Docker-Reference)

[Learning References](https://github.com/cgtfarmer/tax-docs-portal/wiki/Learning-References)

## Release Notes
2026-02-26 - Application stack, initial database functionality, and preliminary Playwright tests are functional.

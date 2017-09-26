curl -sL https://deb.nodesource.com/setup_6.x | -E bash -
apt-get install -y nodejs
npm install -g gitbook-cli
gitbook install
gitbook build

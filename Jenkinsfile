pipeline {
  agent any
  stages {
    stage('') {
      steps {
        sh '''
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g gitbook-cli
gitbook install
gitbook build'''
      }
    }
  }
}

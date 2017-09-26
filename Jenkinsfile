pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Build') {
      steps {
        bash build.sh
      }
    }
  }
}

node('docker') {
    checkout scm
    stage('Build') {
        docker.image('node:latest').inside {
            sh 'bash build.sh'
        }
    }
}

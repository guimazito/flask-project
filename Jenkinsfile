pipeline {
  agent any
  stages {
    stage('Stopping Docker Container') {
      steps {
        powershell 'docker stop flask-project'
      }
    }
    stage('Removing Docker Container') {
      steps {
        powershell 'docker rm flask-project'
      }
    }
    stage('Removing Docker Image') {
      steps {
        powershell 'docker rmi flask-project'
      }
    }
    stage('Building New Image') {
      steps {
        powershell 'docker build -t flask-project .'
      }
    }
    stage('Deploying New Container') {
      steps {
        powershell 'docker run --name flask-project -d -p 5000:5000 flask-project'
      }
    }
  }
}
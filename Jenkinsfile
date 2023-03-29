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
    stage('Installing Python 3.8') {
      steps {        
        powershell 'docker pull python:3.8'
      }
    }
    stage('Installing pywin32') {
      steps {
        powershell 'pip install pywin32'
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
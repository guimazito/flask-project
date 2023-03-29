pipeline {
  agent any
  stages {
    stage('version') {
      steps {
        powershell 'python --version'
      }
    }
    stage('hello') {
      steps {
        powershell 'python app.py'
      }
    }
  }
}
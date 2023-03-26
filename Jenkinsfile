pipeline {
  agent any
  stages {
    stage('Building image') {
      steps {
        powershell 'docker build -t flask-project .'
      }
    }
    stage('Deploy Image') {
      steps {
        powershell 'docker run --name flask-project -d -p 5000:5000 flask-project'
      }
    }
  }
}
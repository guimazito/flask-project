pipeline {
    agent any
    stages{        
       stage('Building image') {    
      steps{
        script {
            sh 'docker build -t flask-project .'
        }
      }
    }
       stage('Deploy Image') {
      steps{
         script {
            sh 'docker run --name flask-project -d -p 5000:5000 flask-project'
          }
        }
      }
    }
}
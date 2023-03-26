pipeline {
    agent any
    stages{        
       stage('Building image') {    
      steps{
        script {
            'docker build -t flask-project .'
        }
      }
    }
       stage('Deploy Image') {
      steps{
         script {
            'docker run --name flask-project -d -p 5000:5000 flask-project'
          }
        }
      }
    }
}
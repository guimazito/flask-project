pipeline {
    agent any
    stages{        
       stage('Building image') {    
      steps{
        // script {
            // dockerImage = docker.build('flask-project')
        powershell 'docker build -t flask-project .'
        // }
      }
    }
       stage('Deploy Image') {
      steps{
        //  script {
            // dockerImage.push('flask-project')
        powershell 'docker run --name flask-project -d -p 5000:5000 flask-project'
        //   }
        }
      }
    }
}
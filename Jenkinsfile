pipeline {
    agent { label "linux" }
    stages {
        stage("build") {
            steps {
                sh """
                    docker build -t flask-project .
                """
            }
        }
        stage("run") {
            steps {
                sh """
                    docker run --name flask-project -d -p 5000:5000 flask-project
                """
            }
        }
    }
}
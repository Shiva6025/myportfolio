pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "shivakrishnaanamala/my-first-image"
        DOCKER_TAG = "latest"
    }

    stages {

        stage('Clone Repository') {
            steps {
                 git branch: 'main', git 'https://github.com/Shiva6025/myportfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'shivakrishnaanamala',
                    passwordVariable: 'Krishna@143'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE:$DOCKER_TAG'
            }
        }
    }
}

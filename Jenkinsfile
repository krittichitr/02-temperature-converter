pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            reuseNode true
        }
    }

    environment {
        VERCEL_TOKEN = credentials('DevOps02_token_krittichitr')
    }

    stages {
        stage('Test npm') { 
            steps {
                sh 'npm install'
                sh 'npm test -- --watchAll=false' 
            }
        }

        stage('Build') { 
            steps {
                sh 'npm run build'
            }
        }

        stage('Test Build') { 
            steps {
                sh 'ls -al build' 
            }
        }

        stage('Deploy') { 
            steps {
                // ระบุชื่อโปรเจกต์เป็นตัวพิมพ์เล็ก และส่ง Token ผ่านตัวแปร
                sh "npx vercel --token ${VERCEL_TOKEN} --name learn-jenkins-app --prod --yes"
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
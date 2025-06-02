pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18' // Verifique se a ferramenta está configurada no Jenkins
    }

    environment {
        HOME = '/var/jenkins_home' // Corrige problema de cache do Cypress
    }

    stages {
        stage('Clonar repositório') {
            steps {
                git 'https://github.com/lucasosses/teste-api-ebac.git'
            }
        }

        stage('Instalar dependências') {
            steps {
                sh 'npm install'
                sh 'npx cypress install' // Para baixar o binário
                // Use "bat" no lugar de "sh" no Windows, se precisar
            }
        }

        stage('Executar testes Cypress') {
            steps {
                sh 'npx cypress run'
                // Use "bat" no lugar de "sh" no Windows, se precisar
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/cypress/videos/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: '**/cypress/screenshots/**/*', allowEmptyArchive: true
        }

        failure {
            echo 'Algum teste falhou. Verifique as evidências para detalhes.'
        }
    }
}
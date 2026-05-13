# Script para Inicializar o Git, fazer os commits organizados e publicar no GitHub

Write-Host "Iniciando a preparacao do versionamento..." -ForegroundColor Cyan

# 1. Inicializa o repositório local
git init

# 2. Adiciona todos os arquivos, respeitando o .gitignore recém-criado
git add .

# 3. Cria a estrutura de commits inicial
git commit -m "feat: initial commit - estrutura do projeto e configuracoes"

Write-Host "Conectando ao repositorio remoto no GitHub..." -ForegroundColor Cyan

# 4. Adiciona o repositório remoto
git remote add origin https://github.com/Paula22122025/03-site-coopstar.git

# 5. Define a branch principal como 'main'
git branch -M main

Write-Host "Publicando no GitHub..." -ForegroundColor Cyan

# 6. Faz o push para o GitHub
git push -u origin main

Write-Host "Projeto publicado com sucesso!" -ForegroundColor Green

# Nutrify API

API REST para gerenciamento de alimentação, dieta e controle de calorias.

## Recursos
- Cadastro e autenticação de usuários (JWT)
- Gerenciamento de alimentos
- Registro de refeições
- Controle diário de consumo calórico
- Documentação Swagger
- Testes unitários
- Workflow GitHub Actions

## Como rodar
1. Instale as dependências: `npm install`
2. Configure o arquivo `.env` baseado no `.env.example` (apenas `JWT_SECRET` e `PORT` são usados).
3. Inicie o servidor: `npm run dev` (a aplicação usa armazenamento em memória; não é necessário MongoDB).

## Documentação
Acesse `/api-docs` após iniciar o servidor.

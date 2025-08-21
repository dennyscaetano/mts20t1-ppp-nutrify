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

## Requisitos
Consulte o documento `REQUISITOS.md` para a especificação completa dos requisitos funcionais e não-funcionais do projeto.

## Políticas de API

- Strict validation: as rotas de criação e atualização (`POST`/`PUT` em `/users`, `/foods`, `/meals`) rejeitam campos extras no corpo da requisição com resposta `400` e mensagem explicando os campos não permitidos. Use apenas os campos documentados no Swagger.
- Timestamps: as entidades retornadas incluem `createdAt` e `updatedAt` (ISO 8601), gerados automaticamente pelo repositório em memória.

## Idioma dos testes
Todos os testes funcionais e unitários foram traduzidos para Português (pt-BR). Os relatórios gerados pelos frameworks de teste (mochawesome, jest-junit) conterão títulos e descrições em pt-BR quando executados localmente nesta base.


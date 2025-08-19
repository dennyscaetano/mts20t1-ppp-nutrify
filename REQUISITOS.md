# Requisitos do Projeto - Nutrify API

Este documento descreve os requisitos funcionais e não funcionais do projeto Nutrify API.

## Requisitos Funcionais

1. Cadastro de usuário
   - Endpoint para registrar usuário com nome, email e senha.
   - Senha deve ser armazenada com hash.

2. Autenticação
   - Login com email e senha.
   - Emissão de token JWT para autenticação em endpoints protegidos.

3. CRUD de Alimentos
   - Criar, listar, atualizar e remover alimentos.
   - Cada alimento possui nome, categoria, calorias, proteína, carboidrato e gordura.

4. Refeições
   - Registrar refeições vinculadas a um usuário.
   - Refeição contém data, lista de alimentos consumidos e totais calculados (calorias e macronutrientes).
   - Listar, atualizar e remover refeições do usuário.

5. Controle diário de calorias
   - Comparar consumo diário total com meta calórica do usuário (campo `calorieGoal`).

6. Documentação
   - Documentação dos endpoints via Swagger/OpenAPI.

7. Testes
   - Testes unitários para rotas e serviços principais.

8. Workflow CI
   - Github Actions para lint e testes em push/PR para `main`.

## Requisitos Não-Funcionais

- API RESTful construída em Node.js com Express.
- Estrutura em camadas: controllers, services, routes, models/repositories.
- Uso de boas práticas: validação de entrada, tratamento de erros, middleware de autenticação.
- Código formatado com Prettier e verificado por ESLint.
- Execução em memória (modo atual): dados voláteis; sem dependência de um banco externo.
- Segurança básica: JWT para autenticação, uso de Helmet para headers HTTP seguros.

## Observações

- Em produção, preferir armazenar dados em um banco persistente (MongoDB, Postgres, etc.).
- JWT_SECRET deve ser setado em variáveis de ambiente.

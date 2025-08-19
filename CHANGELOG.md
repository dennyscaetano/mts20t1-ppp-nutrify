# Changelog

## Unreleased

- Adicionado strict validation: campos extras em `POST`/`PUT` para `users`, `foods`, `meals` agora retornam 400.
- Repositório em memória agora gera `createdAt` e `updatedAt` automaticamente e remove `_id` redundante.
- Controladores agora expõem `createdAt`/`updatedAt` nas respostas.
- Testes atualizados e expandidos para cobrir validação strict em `POST` e `PUT`.
- Swagger atualizado com exemplos incluindo timestamps.

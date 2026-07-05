### v0.3.0.20260705
- Renomeia o modelo `'User'` para `'Customer'` no schema do Prisma.
- Cria o `'CreateCustomerService'` para validação e persistência no banco.
- Cria o `'CreateCustomerController'` para gerenciar a requisição e resposta HTTP.
- Adiciona a rota `POST '/customer'` para registrar novos clientes.

### v0.2.0.20260517
- Instalação e configuração do Prisma ORM.
- Conexão e configuração do banco de dados MongoDB.
- Criação do schema do modelo inicial de Usuário.
- Implementação de uma rota de API de teste para verificar a conexão.

### v0.1.0.20260428
- Configurar o ambiente Node.js com TypeScript.
- Definir a estrutura de diretórios (controladores, serviços, rotas).
- Adicionar o boilerplate do servidor Fastify.
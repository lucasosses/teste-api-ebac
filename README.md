# Testes API - EBAC
## Exercício de Testes com Cypress - Usuários

Esse projeto é um exercício básico feito para aprender e praticar testes automatizados com Cypress, focando nas funcionalidades de cadastro, listagem, edição, validação de contrato e remoção de usuários.

### ✅ O que foi feito:

    📄 Validação de contrato com Joi

    👥 Testes para listar usuários

    ✍️ Cadastro de usuário com dados aleatórios (usando Faker ou fórmula)

    🧮 Teste com email inválido

    ✏️ Edição de usuário com geração de email único via fórmula matemática

    ❌ Delete de usuário (em construção)

### 📦 Ferramentas usadas:

    Cypress

    Faker.js (para dados aleatórios)

    Joi (para validar o contrato da API)

### ▶️ Como rodar:

    Clone o repositório

    Instale as dependências:

```bash
npm install
```

Rode o Cypress:

```bash
    npx cypress open
```
    Selecione o teste desejado e execute 🚀

### 💻 Exemplo de saída esperada:

  Testes da Funcionalidade Usuários
    ✓ Deve validar contrato de usuários
    ✓ Deve listar usuários cadastrados
    ✓ Deve cadastrar um usuário com sucesso
    ✓ Deve validar um usuário com email inválido
    ✓ Deve editar um usuário previamente cadastrado

#### 💡 Exemplo de código comentado:

```js
Cypress.Commands.add('editarUsuario', (id) => {
  // Gera um email curto e único usando base 36
  const emailNovo = `editado${Date.now().toString(36)}@qa.com`;

  return cy.request({
    method: 'PUT',
    url: `usuarios/${id}`,
    body: {
      nome: 'Usuário Editado',
      email: emailNovo,
      password: 'editado123',
      administrador: 'false'
    }
  })
});
```

Esse comando customizado edita o usuário com base no id recebido e garante um email único e válido usando fórmula matemática simples com timestamp.
🤓 Observações

Esse é um projeto de treino para fixar o uso de Cypress com comandos personalizados, tratamento de erros e uso de dados dinâmicos.

#### Lucas Osses do Prado
##### Obrigado!
Cypress.Commands.add('token', (email, senha) => {
    cy.request({
        method: 'POST',
        url: 'login',
        body: {
            "email": email,
            "password": senha 
        }
    }).then((response) => {
        expect(response.status).to.equal(200)
        return response.body.authorization
    })
 })

 import { faker } from '@faker-js/faker';

 Cypress.Commands.add('cadastrarUsuario' , () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    cy.request({
        method: 'POST', 
        url: 'usuarios', 
        body: {
            nome,
            email,
            password,
            "administrador": 'true'
          }, 
          failOnStatusCode: false
    })
 })

 Cypress.Commands.add('editarUsuario', (id) => {
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
  });
});
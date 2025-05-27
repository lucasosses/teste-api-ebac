/// <reference types="cypress" />

import contrato from '../contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {

  it('Deve validar contrato de usuários', () => {
    cy.request('usuarios').then(response => {
      return contrato.validateAsync(response.body);
    });
  });

  it('Deve listar usuários cadastrados', () => {
    cy.request({
      method: 'GET',
      url: 'usuarios'
    }).should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('usuarios');
    });
  });

  it('Deve cadastrar um usuário com sucesso', () => {
    cy.cadastrarUsuario().then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal('Cadastro realizado com sucesso');
    });
  });

  it('Deve validar um usuário com email inválido', () => {
    cy.request({
      method: 'POST',
      url: 'usuarios',
      body: {
        nome: 'Lucas Prado',
        email: 'lucas..2qa.com',
        password: 'testefalho',
        administrador: 'true'
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.email).to.equal('email deve ser um email válido'); // Ajuste conforme a resposta real
    });
  });

  it('Deve editar um usuário previamente cadastrado', () => {
    const usuarioEditado = {
      nome: 'Usuario Alterado',
      email: 'novoemail1@qa.com',
      password: 'alterado',
      administrador: 'true'
    };
    cy.cadastrarUsuario().then(response => {
      const id = response.body._id;

      cy.editarUsuario(id, usuarioEditado).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Registro alterado com sucesso');
      });
    });
  });

  it('Deve deletar um usuário previamente cadastrado', () => {
    cy.cadastrarUsuario().then(response => {
      const id = response.body._id;

      cy.request({
        method: 'DELETE',
        url: `usuarios/${id}`
      }).should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Registro excluído com sucesso');
      });
    });
  });
});
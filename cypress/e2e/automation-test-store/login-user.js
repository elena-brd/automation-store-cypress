/// <reference types="cypress" />

describe('Login User', () => {
   before(() => {
      cy.fixture('user-credentials').then((data) => {
         globalThis.data = data;
      })
   });

   beforeEach(() => {
      cy.visit('https://automationteststore.com/')
   });

   it('User can login to his account', () => {
      cy.get('#customer_menu_top').click();
      cy.get('.returncustomer > .heading2').should('contain', 'Returning Customer');
      cy.get('#loginFrm_loginname').type(data.loginName);
      cy.get('#loginFrm_password').type(data.password);
      cy.get('[title="Login"]').click();
   })


})
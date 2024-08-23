/// <reference types="cypress" />

describe('Login or Register', () => {
   before(() => {
      cy.fixture('user-credentials').then((data) => {
         globalThis.data = data
      })
   });

   beforeEach(() => {
      cy.visit('https://automationteststore.com/')
   });

   it('User can create a new account', () => {
      cy.get('#customer_menu_top').click();
      cy.get('.newcustomer > .heading2').should('contain', 'I am a new customer.');
      cy.get('#accountFrm_accountregister').check().should('be.checked');

      cy.get('[title="Continue"]').click();

      cy.get('#AccountFrm_firstname').type(data.firstName);
      cy.get('#AccountFrm_lastname').type(data.lastName);
      cy.get('#AccountFrm_email').type(data.email);
      cy.get('#AccountFrm_telephone').type(data.telephone);
      cy.get('#AccountFrm_address_1').type(data.address);
      cy.get('#AccountFrm_city').type(data.city);

      cy.get('#AccountFrm_zone_id').select('North Yorkshire');
      cy.get('#AccountFrm_postcode').type(125878);

      cy.get('#AccountFrm_loginname').type(data.loginName);
      cy.get('#AccountFrm_password').type(data.password);
      cy.get('#AccountFrm_confirm').type(data.password);

      cy.get('.form-group').contains('Subscribe:');
      cy.get('#AccountFrm_newsletter0').check();
      cy.get('#AccountFrm_agree').check();

      cy.get('[title="Continue"]').click();

      cy.get('.maintext').should('contain', ' Your Account Has Been Created!')

      
   });
})
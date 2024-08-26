/// <reference types="cypress" />

describe('Contact US page of webdriver University', () => {
    before(() => {
        cy.fixture('user-credentials').then((data) => {
            globalThis.data = data
        })
    });

    beforeEach(() => {
        cy.visit('https://www.webdriveruniversity.com/');
        cy.get('a[href*="Contact-Us/contactus.html"').invoke('removeAttr', 'target').click();
    });


    it('Should pass the contact us page', () => {
        cy.url().should('include', 'contactus');
        cy.title().should('contain', 'WebDriver | Contact Us');

        cy.get('[name="first_name"]').type(data.firstName);
        cy.get('[name="last_name"]').type(data.lastName);
        cy.get('[name="email"]').type(data.email);
        cy.get('[name="message"]').type('How should I learn Cypress?');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('contain', 'Thank You for your Message!')
    });

    it.only('Should NOT pass the contact us page, because all fields are required', () => {
        cy.get('[name="first_name"]').type(data.firstName);
        cy.get('[name="last_name"]').type(data.lastName);
        cy.get('[name="message"]').type('How should I learn Cypress?');
        cy.get('[type="submit"]').click();

        cy.get('body').should('contain', 'Error: all fields are required');
    });
})
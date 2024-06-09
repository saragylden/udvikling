// HelloWorld.cy.js

describe('HomePage', () => {
    it('renders with the correct message', () => {
      // Besøg siden
      cy.visit('/');
  
      // Kontroller om overskriften indeholder den forventede tekst
      cy.get('.greetings h1.green').should('contain.text', 'You did it!');
    });
  });
  
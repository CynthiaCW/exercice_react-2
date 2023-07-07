describe('Test de déconnexion', () => {
    it('Déconnecte l\'utilisateur depuis la page login', () => {
         // Se rendre sur la page de register
      cy.visit('/login')
  
      // Entrer le login, le mot de passe et valider le formulaire
      cy.get('#login').type('monlogin')
      cy.get('#password').type('monmotdepasse')
      cy.get('form').submit()
  
      // On doit être redirigé sur la page d'accueil
      cy.url().should('eq', Cypress.config().baseUrl + '/')
  
      // Cliquer sur le bouton Déconnexion
      cy.contains('Déconnexion').click()
  
      // Le bouton Déconnexion ne doit plus être présent
      cy.contains('Déconnexion').should('not.exist')
    });

    it('Déconnecte l\'utilisateur depuis la page register', () => {
        // Se rendre sur la page de register
     cy.visit('/register')
 
     // Entrer le login, le mot de passe et valider le formulaire
     cy.get('#login').type('monlogin')
     cy.get('#password').type('monmotdepasse')
     cy.get('form').submit()
 
     // On doit être redirigé sur la page login
     cy.url().should('eq', Cypress.config().baseUrl + '/login')
 
     // Cliquer sur le bouton Déconnexion
     cy.contains('Déconnexion').click()
 
     // Le bouton Déconnexion ne doit plus être présent
     cy.contains('Déconnexion').should('not.exist')
   })
   
  })
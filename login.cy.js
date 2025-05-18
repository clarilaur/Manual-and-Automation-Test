describe('login.cy', () => {
    
    it('passes', () => {
        function launchApplication() {
            cy.visit('https://courses.ultimateqa.com/users/sign_in')
        }
    
        function enterUsername(username) {
            cy.get('.action-username').should('have.value', 'rio_pippy@gmail.com') 
        }
        
        function enterPassword(password) {
            cy.get('.action-password').should('have.value', 'Pipwithrio') 
        }
        
        function clickLoginButton(){ 
            cy.get('.action-log-in').click()
        }

        function  verifyLoginSuccess() {
            cy.get('.auth-header')
          .should('have.class', 'user has successfully signed in')
          }
    })
})
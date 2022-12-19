describe('Upload', () => {
    it('Deve fazer upload de imagem', () => {
        cy.visit('/upload')
        
        const imageFile = 'cypress/fixtures/'

        cy.get('input[name=file]').attachFile('/images/andrey.jpg')
        cy.get('input[type=submit]').click()

        cy.get('img[src="/uploads/andrey.jpg"]', {timeout: 7000})
            .should('be.visible')
    });
});
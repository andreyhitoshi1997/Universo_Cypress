describe('Alertas', () => {
    it('Alerta', () => {
        cy.visit('/javascript_alerts')

        cy.contains('button', 'Alerta').click()
        cy.on('window:alert', (result) => {
            expect(result).to.equal('Isto é uma mensagem de alerta')
        })
    });

    it('Deve confirmar a solicitação', () => {
        cy.visit('/javascript_alerts')

        cy.contains('button', 'Confirma').click()
        cy.on('window:confirm', () => true)
        cy.get('#result').should('have.text', 'Mensagem confirmada')
    });

    it('Deve cancelar a solicitação', () => {
        cy.visit('/javascript_alerts')

        cy.contains('button', 'Confirma').click()
        cy.on('window:confirm', () => false)
        cy.get('#result').should('have.text', 'Mensagem não confirmada')
    });

    it('Deve exibir mensagem de boas vindas com o meu nome', () => {
        cy.visit('/javascript_alerts')

        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('Andrey')
            cy.contains('button', 'Prompt').click()
        })

        cy.get('#result').should('have.text', 'Olá, Andrey')
    });

});
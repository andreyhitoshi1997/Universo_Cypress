describe('Tabelas', () => {
    it('Validando uma tabela', () => {
        cy.visit('/tables')

        cy.get('table tbody tr')
            .then((series) => {
                expect(series).to.have.length(7)
            })
    });

    it('Deve exibir a serie loki', () => {
        cy.visit('/tables')
        cy.contains('table tbody tr', 'Loki')
            .then((item)=> {
                expect(item).to.contain('Marvel')
                expect(item).to.contain('Disney+')
                expect(item).to.contain('2021')
            })
    });

    it('Deve remover a serie round 6', () => {
        cy.visit('/tables')
        cy.contains('table tbody tr', 'Round 6')
            .then((item)=> {
                item.find('.delete').trigger('click')
            })
            .should('not.exist')

        cy.get('table tbody tr')
            .then((series) => {
                expect(series).to.have.length(6)
            })

    }); 
});
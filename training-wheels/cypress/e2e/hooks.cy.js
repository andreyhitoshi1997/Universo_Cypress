describe('Suíte de testes', () => {

    before(() => {
        cy.log('antes dos testes')
    });

    beforeEach(() => {
        cy.log('antes de cada teste')
    });

    it('teste 1', () => {
        cy.log('testando o teste 1')
    });

    it('teste 2', () => {
        cy.log('testando o teste 2')
    });

    it('teste 3', () => {
        cy.log('testando o teste 3')
    });

    afterEach(() => {
        cy.log('depois de cada teste')
    });

    after(() => {
        cy.log('depois dos testes')
    });
});
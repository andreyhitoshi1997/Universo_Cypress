import forgotpass from '../support/pages/forgotpass';
import fpPage from '../support/pages/forgotpass'
import rpPage from '../support/pages/resetpass';

describe('Resgate de senha', () => {

    let data;

    before(() => {
        cy.fixture('recovery').then((recovery) => {
           data = recovery
        })
    });

    context('Quanodo o usuaŕio esquece a senha', () => {

        before(() => {
            cy.postUser(data)
        });

        it('Então deve resgatar por email', () => {
            fpPage.go()
            fpPage.form(data.email)
            forgotpass.submit()

            const message = "Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada."

            fpPage.toast.shouldHaveText(message)
        });
    });

    context('Quando o usuário solicita o resgate', () => {

        before(() => {
            cy.postUser(data)
            cy.recoveryPass(data.email)
        });
        it('Deve poder cadastrar uma nova senha', () => {
            const token = Cypress.env('recoveryToken')
            rpPage.go(token)
            rpPage.form('abc123', 'abc123')
            rpPage.submit()

            const message = 'Agora você já pode logar com a sua nova senha secreta.'
            rpPage.toast.shouldHaveText(message)
        });
    });
});
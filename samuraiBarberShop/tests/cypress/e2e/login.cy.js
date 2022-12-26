import loginPage from "../support/pages/login";
import dashPage from '../support/pages/dash';

describe('Login', () => {

    context('Quando o usuário é muito bom', () => {
        const user = {
            name: "Robson Jassa",
            email: "jassa@samuraibs.com",
            password: "pwd123",
            is_provider: true
        }
        
        before(() => {
            cy.postUser(user)
        });

        it('Deve logar com sucesso', () => {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            dashPage.header.userLoggedIn(user.name)
        });
    });

    context('Quando temos um usuário valido com senha incorreta', () => {

        let user = {
            name: "Celso Kamura",
            email: "kamura@samuraibs.com",
            password: "pwd123",
            is_provider: true
        }

        before(() => {
            cy.postUser(user).then(() => {
                user.password = 'abc123'
            })

        });

        it('Então deve notificar erro de credenciais', () => {
            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
            loginPage.toast.shouldHaveText(message);
        });
    });

    context('Quando o formato de email é inválido ', () => {

        const email = [ 
            'papito.com.br',
            'yahoo.com',
            '@gmail.com',
            '@',
            'papito@',
            '111',
            '(_*$#@#$',
            'xpto123'
         ]

        //  before(() => {
        //     loginPage.go()
        //  });

         email.forEach((email) => {
            it('Não deve logar com o email: ' + email, () => {
                const user = {email: email,password: 'pwd123'}

                loginPage.go()
                loginPage.form(user)
                loginPage.submit()
                loginPage.alertHaveText('Informe um email válido')
            });
         })
    });
});
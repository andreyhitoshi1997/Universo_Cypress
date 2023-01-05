import signupPage from '../support/pages/signup'

describe('Cadastro', () => {

    // before(() => {
    //     cy.fixture('papito').then((papito) => {
    //         this.papito = papito
    //     })
    // });
        
    context.skip('Quando o email ja existe', () => {
        const user = {
            nome: "João Lucas",
            email: "Raquel.Sanford@gmail.com",
            senha: "pwd123",
            is_provider: true
        }

        before(() => {
            cy.postUser(user)
        });

        it('Deve exibir email ja cadastrado', () => {
            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.toast.shouldHaveText('Email já cadastrado para outro usuário.')    
        });
    });

    context('Quando o usuário é novato', () => {
        const user = {
            nome: 'Andrey Onoue',
            email: 'teste@teste.com',
            senha: 'pwd123'
        }
    
        it('Então deve cadastrar um novo usuário', () => {
            cy.task('removeUser', user.email)
                .then((result) => {
                    console.log(result)
            })

            const expectMessage = 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!'
    
            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.toast.shouldHaveText(expectMessage)

            // cy.intercept('POST', '/users',{
            //     statusCode: 200
            // }).as('postUser')
           
            // cy.wait('@postUser')
    
            // cy.wait(1000)
            // cy.get('body')
        });
    });

    context('Quando o email é incorreto', () => {

        const user = {
            nome: 'Elizabeth Olsen',
            email: 'liza.yahoo.com',
            senha: 'pwd123'
        }
        it('Deve exibir mensagem de alerta', () => {
            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.alertHaveText('Informe um email válido')
        });
    });

    context('Quando a senha é muito curta', () => {

        const senhas = [ '1', '1a', 'ab3', 'abc4', 'ab#c5' ]
  
        beforeEach(() => {
            signupPage.go()
        });

        senhas.forEach((senha) => {
            it('Não deve cadastrar com a senha: ' + senha, () => {
                const user = {nome: 'Json Friday',email: 'jason@gmail.com',senha}
                
                signupPage.form(user)
                signupPage.submit()
            });
        })

        afterEach(() => {
            signupPage.alertHaveText('Pelo menos 6 caracteres')
        });
    });

    context('Quando não preencho nenhum dos campos', () => {
        const alertMessages = [
            'Nome é obrigatório',
            'E-mail é obrigatório',
            'Senha é obrigatória'
           ] 

           before(() => {
            signupPage.go()
            signupPage.submit()
        });

        
            alertMessages.forEach((alert) => {
                it('Deve exibir '+ alert.toLowerCase(), () => {
                    signupPage.alertHaveText(alert)
                });
            })      
    });
});
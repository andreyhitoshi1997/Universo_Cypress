import {el} from './elements'
import toast from '../../component/toast'

class SignupPage{

    constructor(){
        this.toast = toast;
    }

    go(){
        cy.visit('/signup')
    }

    form(user){
        cy.get(el.name).type(user.nome)
        cy.get(el.email).type(user.email)
        cy.get(el.password).type(user.senha)
    }

    submit(){
        cy.contains(el.signupButton).click()
    }

    alertHaveText(expectText){
        cy.contains('.alert-error', expectText)
        .should('be.visible')
    }
}

export default new SignupPage()
import { el } from "./elements"
import toast from '../../component/toast'
import alert from "../../alert"

class LoginPage{

    constructor(){
        this.toast = toast
        this.alert = alert
    }

    go(){
        cy.visit('/')
    }

    form(user){
        cy.get(el.email)
            .clear()
            .type(user.email)

        cy.get(el.password)
            .clear()
            .type(user.password)
    }

    submit(){
        cy.contains(el.signIn)
            .click()
    }

}

export default new LoginPage()
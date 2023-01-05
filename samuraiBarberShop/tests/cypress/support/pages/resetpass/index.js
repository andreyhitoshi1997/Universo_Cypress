import toast from "../../component/toast"
import { el } from "./elements"

class ResetPassPage{

    constructor(){
        this.toast = toast
    }
    
    go(token){
        cy.visit('/reset-password?token=' + token)
    }

    form(newPass, confirmPass){
        cy.get(el.password)
            .clear()
            .type(newPass)
        cy.get(el.confirmPassword)
            .clear()
            .type(confirmPass)
    }

    submit(){
        cy.contains(el.changePassButton).click()
    }
}

export default new ResetPassPage()
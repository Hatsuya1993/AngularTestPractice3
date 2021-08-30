import {$, browser, ElementFinder, element, by, $$} from 'protractor'

export class Form {

        website : any = browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile")
        header : ElementFinder = $("#form-container h2")
        status : ElementFinder = $("#status-buttons")
        nameInput : ElementFinder = element(by.model("formData.name"))
        emailInput : ElementFinder = element(by.model("formData.email"))
        nextSectionButton : ElementFinder = $("a[ui-sref='form.interests']")
        nextSection2Button : ElementFinder = $("a[ui-sref='form.payment']")
        results : ElementFinder = $("pre.ng-binding")
        radioXbox : ElementFinder = $("input[value='xbox']")
        submitButton : ElementFinder = element(by.buttonText("Submit"))
        paymentText : ElementFinder = $("div#form-views div h3")

}
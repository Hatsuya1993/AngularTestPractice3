"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const protractor_1 = require("protractor");
class Form {
    constructor() {
        this.website = protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile");
        this.header = protractor_1.$("#form-container h2");
        this.status = protractor_1.$("#status-buttons");
        this.nameInput = protractor_1.element(protractor_1.by.model("formData.name"));
        this.emailInput = protractor_1.element(protractor_1.by.model("formData.email"));
        this.nextSectionButton = protractor_1.$("a[ui-sref='form.interests']");
        this.nextSection2Button = protractor_1.$("a[ui-sref='form.payment']");
        this.results = protractor_1.$("pre.ng-binding");
        this.radioXbox = protractor_1.$("input[value='xbox']");
        this.submitButton = protractor_1.element(protractor_1.by.buttonText("Submit"));
        this.paymentText = protractor_1.$("div#form-views div h3");
    }
}
exports.Form = Form;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBcUU7QUFFckUsTUFBYSxJQUFJO0lBQWpCO1FBRVEsWUFBTyxHQUFTLG9CQUFPLENBQUMsR0FBRyxDQUFDLDZFQUE2RSxDQUFDLENBQUE7UUFDMUcsV0FBTSxHQUFtQixjQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUNoRCxXQUFNLEdBQW1CLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzdDLGNBQVMsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7UUFDOUQsZUFBVSxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLHNCQUFpQixHQUFtQixjQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtRQUNwRSx1QkFBa0IsR0FBbUIsY0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUE7UUFDbkUsWUFBTyxHQUFtQixjQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUM3QyxjQUFTLEdBQW1CLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ3BELGlCQUFZLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQy9ELGdCQUFXLEdBQW1CLGNBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0lBRWhFLENBQUM7Q0FBQTtBQWRELG9CQWNDIn0=
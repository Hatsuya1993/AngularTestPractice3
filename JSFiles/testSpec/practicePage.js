"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const form_1 = require("../pageObject/form");
describe('Testing the elements existance', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        yield form.website;
    }));
    it('Check the url link', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        expect(yield protractor_1.browser.getCurrentUrl()).toBe("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile");
    }));
    it('Check the title', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        expect(yield protractor_1.browser.getTitle()).toBe("Protractor practice website - Multiform");
    }));
    it('Check the header', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        expect(yield form.header.isDisplayed).toBeTruthy();
    }));
    it('Check the status', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        expect(yield form.status.isDisplayed).toBeTruthy();
    }));
    it('Check the name input', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        expect(yield form.nameInput.isDisplayed).toBeTruthy();
    }));
    it('Check the email input', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        expect(yield form.emailInput.isDisplayed).toBeTruthy();
    }));
    it('Check the next section button', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        expect(yield form.nextSectionButton.isDisplayed).toBeTruthy();
    }));
    it('Check the results display', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        expect(yield form.results.isDisplayed).toBeTruthy();
    }));
}));
describe('Check the results data', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        yield form.website;
    }));
    it('Check the default value', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        expect(yield form.results.getText()).toBe('    {}\n  ');
    }));
    it('Check the value once name and email is added', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        yield form.nameInput.sendKeys('TestName');
        yield form.emailInput.sendKeys('TestPassword');
        expect(yield form.results.getText()).toBe('    {"name":"TestName","email":"TestPassword"}\n  ');
    }));
    it('Check the value once radio button is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        yield form.nameInput.sendKeys('TestName');
        yield form.emailInput.sendKeys('TestPassword');
        yield form.nextSectionButton.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield form.radioXbox.isDisplayed().then(() => __awaiter(void 0, void 0, void 0, function* () {
                yield form.radioXbox.click();
                expect(yield form.results.getText()).toBe('    {"name":"TestName","email":"TestPassword","type":"xbox"}\n  ');
            }));
        }));
    }));
}));
describe('Testing the functionality of the popup ', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        yield form.website;
    }));
    it('Check the payment text', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        yield form.nameInput.sendKeys('TestName');
        yield form.emailInput.sendKeys('TestPassword');
        yield form.nextSectionButton.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield form.radioXbox.isDisplayed().then(() => __awaiter(void 0, void 0, void 0, function* () {
                yield form.radioXbox.click();
                yield form.nextSection2Button.click();
                expect(yield form.paymentText.getText()).toBe("Test Completed, WooHoo!");
            }));
        }));
    }));
    it('Check the text of the popup', () => __awaiter(void 0, void 0, void 0, function* () {
        let form = new form_1.Form();
        yield form.nameInput.sendKeys('TestName');
        yield form.emailInput.sendKeys('TestPassword');
        yield form.nextSectionButton.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield form.radioXbox.isDisplayed().then(() => __awaiter(void 0, void 0, void 0, function* () {
                yield form.radioXbox.click();
                yield form.nextSection2Button.click();
                yield form.submitButton.click();
                expect(yield (yield protractor_1.browser.switchTo().alert()).getText()).toBe("awesome!");
            }));
        }));
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3RpY2VQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvcHJhY3RpY2VQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9DO0FBQ3BDLDZDQUF1QztBQUV2QyxRQUFRLENBQUMsZ0NBQWdDLEVBQUUsR0FBUyxFQUFFO0lBRWxELFVBQVUsQ0FBQyxHQUFRLEVBQUU7UUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQTtRQUNyQixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdEIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxHQUFTLEVBQUU7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQTtRQUNyQixNQUFNLENBQUUsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLDZFQUE2RSxDQUFDLENBQUE7SUFDOUgsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFTLEVBQUU7UUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQTtRQUNyQixNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUE7SUFDcEYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFTLEVBQUU7UUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQTtRQUNyQixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3RELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsa0JBQWtCLEVBQUUsR0FBUyxFQUFFO1FB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
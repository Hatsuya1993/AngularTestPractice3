import { browser } from "protractor"
import {Form} from "../pageObject/form"

describe('Testing the elements existance', async () => {

    beforeEach(async() => {
        let form = new Form()
        await form.website
    })

    it('Check the url link', async () => {
        let form = new Form()
        expect( await browser.getCurrentUrl()).toBe("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile")
    })

    it('Check the title', async () => {
        let form = new Form()
        expect(await browser.getTitle()).toBe("Protractor practice website - Multiform")
    })

    it('Check the header', async () => {
        let form = new Form()
        expect(await form.header.isDisplayed).toBeTruthy()
    })

    it('Check the status', async () => {
        let form = new Form()
        expect(await form.status.isDisplayed).toBeTruthy()
    })

    it('Check the name input', async () => {
        let form = new Form()
        expect(await form.nameInput.isDisplayed).toBeTruthy()
    })

    it('Check the email input', async () => {
        let form = new Form()
        expect(await form.emailInput.isDisplayed).toBeTruthy()
    })

    it('Check the next section button', async () => {
        let form = new Form()
        expect(await form.nextSectionButton.isDisplayed).toBeTruthy()
    })
    
    it('Check the results display', async () => {
        let form = new Form()
        expect(await form.results.isDisplayed).toBeTruthy()
    })

})

describe('Check the results data', async () => {
    
    beforeEach(async() => {
        let form = new Form()
        await form.website
    })

    it('Check the default value', async () => {
        let form = new Form()
        expect(await form.results.getText()).toBe('    {}\n  ')
    })

    it('Check the value once name and email is added', async () => {
        let form = new Form()
        await form.nameInput.sendKeys('TestName')
        await form.emailInput.sendKeys('TestPassword')
        expect(await form.results.getText()).toBe('    {"name":"TestName","email":"TestPassword"}\n  ')
    })

    it('Check the value once radio button is selected', async () => {
        let form = new Form()
        await form.nameInput.sendKeys('TestName')
        await form.emailInput.sendKeys('TestPassword')
        await form.nextSectionButton.click().then(async () => {
            await form.radioXbox.isDisplayed().then(async () => {
                await form.radioXbox.click()
                expect(await form.results.getText()).toBe('    {"name":"TestName","email":"TestPassword","type":"xbox"}\n  ')
            })
        })
    })

})

describe('Testing the functionality of the popup ', async () => {
    
    beforeEach(async() => {
        let form = new Form()
        await form.website
    })

    it('Check the payment text', async () => {
        let form = new Form()
        await form.nameInput.sendKeys('TestName')
        await form.emailInput.sendKeys('TestPassword')
        await form.nextSectionButton.click().then(async () => {
            await form.radioXbox.isDisplayed().then(async () => {
                await form.radioXbox.click()
                await form.nextSection2Button.click()
                expect(await form.paymentText.getText()).toBe("Test Completed, WooHoo!")
            })
        })
    })

    it('Check the text of the popup', async () => {
        let form = new Form()
        await form.nameInput.sendKeys('TestName')
        await form.emailInput.sendKeys('TestPassword')
        await form.nextSectionButton.click().then(async () => {
            await form.radioXbox.isDisplayed().then(async () => {
                await form.radioXbox.click()
                await form.nextSection2Button.click()
                await form.submitButton.click()
                expect(await (await browser.switchTo().alert()).getText()).toBe("awesome!")
            })
        })
    })

})


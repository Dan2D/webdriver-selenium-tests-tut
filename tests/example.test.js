//Using Chai as assertion library in tut, but can use whatever assertion library you want like Jest
const {expect} = require('chai');

describe('DuckDuckGo Search Test', () => {
    it('should search a value', () => {
        browser.url("https://duckduckgo.com/");
        browser.$('#search_form_input_homepage').setValue('WebdriverIO');
        browser.$("#search_button_homepage").click();
    });

    it('should verify title value', () => {
        const title = browser.getTitle();
        expect(title).to.contains("WebdriverIO");
    });

});
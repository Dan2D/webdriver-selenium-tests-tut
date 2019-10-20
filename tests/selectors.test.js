const {expect} = require('chai');

describe("Selectors Playground", () => {
    it('should select by id', () => {
        const byID = $("#signin_button");
        byID.click();
    });

    it('should select by class', () => {
        const byClassName = $(".brand");
        byClassName.click();
    })

    it('should select by XPath', () => {
        const byXpath = $('//input[@id="searchTerm"]');
        byXpath.click();
    });

    it('should select by css query', () => {
        const byCSS = $('form');
        byCSS.isVisible();
    });

    it('should target by link text', () => {
        const byLinkText = $('=Zero Bank');
        byLinkText.click();
    });

    it('should target by partial link text', () => {
        const byPartialLinkText = $('*Zero');
        byPartialLinkText.click();
    });
    // Give element and text
    it('should select by text', () => {
        const byText = $('h1=Title');
    })
});
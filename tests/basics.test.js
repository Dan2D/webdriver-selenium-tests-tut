//need to install babel/register and put it into your wdio.config for es6 modules to work
import {expect} from 'chai';

describe('WebdriverIO basics', () => {

    // it('should load url', () => {
    //     const url = 'http://zero.webappsecurity.com/';
    //     browser.url(url);
    //     const pageUrl = browser.getUrl();
    //     expect(pageUrl).to.equal(url);
    //     });

    //     it('should match the page title', () => {
    //         const pageTitle = browser.getTitle();
    //         expect(pageTitle).to.equal("Zero - Personal Banking - Loans - Credit Cards");
    //     });

        //Custom Commands
        it('should get the url and title', () => {
            const url = 'http://zero.webappsecurity.com/';
            browser.url(url);
            const metadata = browser.getMetaData();
            expect(metadata.url).to.equal(url);
            expect(metadata.title).to.equal("Zero - Personal Banking - Loans - Credit Cards");
        });

        it('should wait for display', () => {
            const footerLnk = $('=https://www.microfocus.com/about/legal/#privacy');
            footerLnk.waitForDisplayed(5000);
        });


        it('should wait for exist', () => {
            const signInBtn = browser.$('#signin_button');
            signInBtn.click();
            const loginForm = $('#login_form');
            loginForm.waitForExist(5000);
        });

        it('should inject js into browser', () => {
           const result = browser.execute((num1, num2) => {
               return (num1 + num2)
           }, 5, 10);
           expect(result).to.equal(15);
        });

            it('should work with inputs', () => {
                browser.url('http://zero.webappsecurity.com/');
                const searchBox = $('#searchTerm');
                searchBox.addValue('sample text');
                searchBox.setValue("another sample");
                browser.pause(3000);
            });

            it('should check the state of an element', () => {
                browser.url('http://zero.webappsecurity.com/');
                const signinButton = $('#signin_button');
                expect(signinButton.isExisting()).to.be.true;
                // expect(signinButton.isSelected()).to.be.true;
                expect(signinButton.isDisplayed()).to.be.true;
            });
});
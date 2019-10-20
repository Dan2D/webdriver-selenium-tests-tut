import {expect} from 'chai';

describe('The Feedback Element', () => {
    //Redundant, should be able to use re-usable tests, which is what the abstraction framework and framework is for

    before(() => {
        browser.url('http://zero.webappsecurity.com/');
        const metadata = browser.getMetaData();
        expect(metadata.url).to.equal('http://zero.webappsecurity.com/');
        expect(metadata.title).to.equal('Zero - Personal Banking - Loans - Credit Cards');
    });

    it('should navigate to feedback', () => {
        // $('#feedback').click();
        browser.waitAndClick('#feedback');
        const pageTitle = browser.getTitle();
        expect(pageTitle).to.contains("Zero - Contact Us");
    });

    it('should submit feedback form', () => {

        const form = $('form');
        form.waitForExist(5000);

        // const name = $('#name');
        // const email = $('#email');
        // const subject = $('#subject');
        // const textArea = $('#comment');
        // const submit = $('input.btn-signin');

        // name.setValue('John Doe');
        // email.setValue('random@email.com');
        // subject.setValue('random');
        // textArea.setValue('Some Text');

        browser.waitAndType('#name', 'John Doe');
        browser.waitAndType('#email', 'John Doe');
        browser.waitAndType('#subject', 'John Doe');
        browser.waitAndType('#comment', 'John Doe');
        // submit.click();
        browser.waitAndClick('input.btn-signin');
        
        const feedbackResp = $('.offset3*= Thank you for your comments');
        feedbackResp.waitForExist(5000);
        expect(feedbackResp.isExisting()).to.be.true;
    })



});

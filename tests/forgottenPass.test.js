import {expect} from 'chai';
import * as dataHelpers from "../lib/dataHelper";

import Navbar from "../components-objects/Navbar";
import LoginPage from "../page-objects/LoginPage";
import ForgottenPassPage from "../page-objects/ForgottenPassPage";

describe('The Login Element', () => {
    //Redundant, should be able to use re-usable tests, which is what the abstraction framework and framework is for
    it('should verify we are on homepage', () => {
        browser.url('http://zero.webappsecurity.com/');
        const metadata = browser.getMetaData();
        expect(metadata.url).to.equal('http://zero.webappsecurity.com/');
        expect(metadata.title).to.equal('Zero - Personal Banking - Loans - Credit Cards');
    });

    it('should navigate to login', () => {
        Navbar.signInBtn.waitForExist(5000);
        Navbar.signInBtn.click();
        const metadata = browser.getMetaData();
        expect(metadata.url).to.contains('login.html');
    });

    it('should click on forgotten password link', () => {
        LoginPage.forgotPassBtn.waitForExist(5000);
        LoginPage.forgotPassBtn.click();

        ForgottenPassPage.forgotPassHeader.waitForExist(5000);
        expect(ForgottenPassPage.forgotPassHeader.getText()).to.contains("Forgotten Password");
    });

    it('should request new password', () => {

        ForgottenPassPage.submitEmail(dataHelpers.getRandEmail);
        ForgottenPassPage.forgottenPassResp.waitForExist();
        expect(ForgottenPassPage.forgottenPassResp.getText()).contains('following email:');
    });

});    


//Using stand alone webdriver without abstraction below
// describe('The Login Element', () => {
//     //Redundant, should be able to use re-usable tests, which is what the abstraction framework and framework is for
//     it('should verify we are on homepage', () => {
//         browser.url('http://zero.webappsecurity.com/');
//         const metadata = browser.getMetaData();
//         expect(metadata.url).to.equal('http://zero.webappsecurity.com/');
//         expect(metadata.title).to.equal('Zero - Personal Banking - Loans - Credit Cards');
//     });

//     it('should navigate to login', () => {
//         // const signInBtn = $('#signin_button');
//         // signInBtn.click();
//         browser.waitAndClick('#signin_button');
//         const metadata = browser.getMetaData();
//         expect(metadata.url).to.contains('login.html');
//     });

//     it('should click on forgotten password link', () => {
//         // const forgotPassBtn = $('*=Forgot your password ?');
//         // forgotPassBtn.waitForExist(5000);
//         // forgotPassBtn.click();
//         browser.waitAndClick('*=Forgot your password ?');

//         const pageTitle = $('h3=Forgotten Password');
//         pageTitle.waitForExist(5000);
//         expect(pageTitle.getText()).to.contains("Forgotten Password");
//     });

//     it('should request new password', () => {
//         // const emailInput = $('#user_email');
//         const submitBtn = $('input.btn-primary');

//         // emailInput.waitForExist(5000);
//         // emailInput.setValue('random@email.com');
//         browser.waitAndType('#user_email', 'random@email.com');
//         submitBtn.click();
//         //can do element text with classes too!
//         const passResp = $('.offset3*=Your password will be sent to the following email:');
//         passResp.waitForExist(5000);
//         expect(passResp.getText()).contains('random@email.com');
//  });

// });    
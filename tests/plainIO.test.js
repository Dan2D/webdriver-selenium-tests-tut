import {expect} from 'chai';
import * as dataHelper from "../lib/dataHelper";

describe('The Plain webdriver IO Log In', () => {
    //First end to end test of bad login
    it('should verify we are on homepage', () => {
        browser.url('http://zero.webappsecurity.com/');
        const metadata = browser.getMetaData();
        expect(metadata.url).to.equal('http://zero.webappsecurity.com/');
        expect(metadata.title).to.equal('Zero - Personal Banking - Loans - Credit Cards');
    })

    it('should navigate to login', () => {
        // const signInBtn = $('#signin_button');
        // signInBtn.click();
        browser.waitAndClick('#signin_button');
        const metadata = browser.getMetaData();
        expect(metadata.url).to.contains('login.html');
    });

    it('should give an error on false login', () => {
        //Check to make sure login form is existing
        // const loginForm = $('#login_form');
        // loginForm.waitForExist(5000);
        browser.waitAndClick('#login_form');

        //Better to create reusable selectors, here we can only use in this scope
        //Input user and password and click sign in
        // const userLogin = $('#user_login');
        // const pass = $('#user_password');
        const loginBtn = $('div.form-actions input.btn.btn-primary');
        // userLogin.setValue('admin');
        // pass.setValue('admin');
        // loginBtn.click();

        browser.waitAndType('#user_login', dataHelper.getRandEmail());
        browser.pause(5000);
        browser.waitAndType('#user_password', 'admin');
        loginBtn.click();

        //check that bad login produces error
        const loginErr = $('div.alert.alert-error');
        expect(loginErr.getText()).to.contains("wrong");
    });

});
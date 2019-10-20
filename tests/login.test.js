import {expect} from 'chai';
import * as dataHelpers from "../lib/dataHelper";
import {username, password} from "../lib/config";

import LoginPage from "../page-objects/LoginPage";
import UserPage from "../page-objects/UserPage";

describe('The Login Form', () => {

    it('should deny access with wrong creds', () => {
        LoginPage.open();
        LoginPage.loginToApp(dataHelpers.getRandName(), dataHelpers.getRandId());
        expect(LoginPage.loginErr.getText()).to.contains("wrong");
    });

    it('should allow succesfull login', () => {
        LoginPage.open();
        LoginPage.loginToApp(username, password);
        UserPage.successIcon.waitForExist();
    });

    it('should logout from App', () => {
        UserPage.successIcon.waitForExist();
        UserPage.successIcon.click();
        UserPage.logOutBtn.waitForExist();
        UserPage.logOutBtn.click();

        UserPage.logOutBtn.waitForExist(3000, true);
    });
});
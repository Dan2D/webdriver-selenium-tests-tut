import BasePage from "./BasePage";

class ForgottenPassPage extends BasePage {

    get forgotPassHeader() {
        return $('h3*=Forgotten Password');
    };

    get emailInput() {
        return $('#user_email');
    };

    get submitBtn() {
        return $('.btn-primary');
    };

    get forgottenPassResp() {
        return $('.offset3*=following email:');
    };

    submitEmail(email) {
        this.emailInput.waitForExist();
        this.emailInput.setValue(email);
        this.submitBtn.click();
    };

};

export default new ForgottenPassPage();
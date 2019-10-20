import BasePage from "./BasePage";

class UserPage extends BasePage {

    get successIcon() {
        return $('i.icon-user');
    };

    get logOutBtn() {
        return $('#logout_link');
    };

};

export default new UserPage();
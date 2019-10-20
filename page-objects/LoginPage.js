import BasePage from "./BasePage";

class LoginPage extends BasePage {
    //---constants---
    //login form
    //username
    //password
    //submit btn

    //getters will bind that property to the object when looked up
    //so when we import the login page we don't need to call anything.
    //LoginPage.loginForm, LoginPage.username, etc. already exitsts
    get loginForm() {
        return $('#login_form');
    } 

    get username(){
        return $('#user_login');
    };

    get password() {
        return $('#user_password');
    };

    get submitBtn() {
        return $('.btn-primary');
    };

    get forgotPassBtn() {
        return $('a*=Forgot your password ?');
    };

    get loginErr() {
        return $('.alert*=wrong');
    };
    
    //---functions---
    //open login page

    open() {
        // Shouldn't we navigate like a user would??
        super.open("http://zero.webappsecurity.com/login.html");
    };

    loginToApp(username, pass) {
        this.loginForm.waitForExist(5000);
        this.username.setValue(username);
        this.password.setValue(pass);
        this.submitBtn.click();
    };

};

//We are initializing it on export, so we can have our getters immeiately
export default new LoginPage();

//the page objects allow us to abstract ourselves from the tests
//We can now just update the variables/funcs in one place and they will change in all our tests
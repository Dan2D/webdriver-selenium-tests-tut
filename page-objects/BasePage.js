export default class BasePage {

    get loginBtn() {
        return $('#signin_btn');
    };

    open(url){
        browser.url(url);
    };

    title(){
      browser.getTitle();
    };

    url(){
      browser.getUrl();
    };

    wait(time){
        browser.pause(time);
    };


};
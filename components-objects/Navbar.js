class NavBar {

    get logoBtn() {
        return $('a.brand=Zero Bank');
    };

    get searchBar() {
        return $('#searchTerm');
    };

    get signInBtn() {
        return $('#signin_button');
    };

    get homeNav() {
        return $('#homeMenu');
    };

    get onlineBankingNav() {
        return $('#onlineBankingMenu');
    };

    get feedbackNav() {
        return $('#feedback');
    };

    search(text) {
        this.searchBar.waitForExist(5000);
        this.searchBar.setValue(text);
        browser.keys('Enter');
    };

};

export default new NavBar();
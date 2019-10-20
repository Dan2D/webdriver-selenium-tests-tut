import Navbar from "../components-objects/Navbar";

describe('The Searchbar', () => {
    it('should search some text', () => {
        browser.url("http://zero.webappsecurity.com/index.html");
        Navbar.search('Random Text');
    });
    
});
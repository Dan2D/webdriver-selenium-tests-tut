import BasePage from "./BasePage";

class FeedbackPage extends BasePage {

        get feedbackForm() {
            return $('form');
        };

        get inputName() {
            return $('#name');
        };

        get inputEmail() {
            return $('#email');
        };

        get inputSubject() {
            return $('#subject');
        };

        get inputText() {
            return $('#comment');
        };

        get submitBtn() {
            return $('input.btn-signin');
        };

        get feedbackTitle() {
            return $('#feedback-title');
        };

        get feedbackResp() {
            return $('.offset3*= Thank you for your comments');
        };

        submitFeedback(name, email, subject, text) {
            this.feedbackForm.waitForExist(5000);
            this.inputName.setValue(name);
            this.inputEmail.setValue(email);
            this.inputSubject.setValue(subject);
            this.inputText.setValue(text);
            this.submitBtn.click();
        }
};

export default new FeedbackPage();
import HomePage from '../../page-objects/HomePage'
import FeedbackPage from '../../page-objects/FeedbackPage'

describe('Feedback Test', () => {
  const homePage = new HomePage();
  const feedbackPage = new FeedbackPage();

  before(function () {
    homePage.visit()
  })

  it('should display feedback form', function () {
    homePage.clickOnFeedback()
    feedbackPage.feedbackFormIsVisible()
  })

  it('should submit feedback form', () => {
    feedbackPage.fillFeedbackForm("Name", "email@email.com", "subject", "some text")
    feedbackPage.submitFeedbackForm()
  })

  it('should display success message', () => {
    feedbackPage.showSuccessMessage()
  })
});
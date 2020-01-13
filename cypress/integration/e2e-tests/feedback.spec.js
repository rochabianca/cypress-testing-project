import HomePage from '../../page-objects/HomePage'
import FeedbackPage from '../../page-objects/FeedbackPage'
import { name, email, subject, comment } from '../../fixtures/feedback-data'

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
    feedbackPage.fillFeedbackForm(name, email, subject, comment)
    feedbackPage.submitFeedbackForm()
  })

  it('should display success message', () => {
    feedbackPage.showSuccessMessage()
  })
});
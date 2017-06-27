import { AssessmentPage } from './app.po';

describe('assessment App', () => {
  let page: AssessmentPage;

  beforeEach(() => {
    page = new AssessmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

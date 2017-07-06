import { TimeitPage } from './app.po';

describe('timeit App', () => {
  let page: TimeitPage;

  beforeEach(() => {
    page = new TimeitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

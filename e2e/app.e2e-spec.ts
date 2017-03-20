import { InfoBoxPage } from './app.po';

describe('info-box App', () => {
  let page: InfoBoxPage;

  beforeEach(() => {
    page = new InfoBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

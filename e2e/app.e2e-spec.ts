import { MyReadPage } from './app.po';

describe('my-read App', () => {
  let page: MyReadPage;

  beforeEach(() => {
    page = new MyReadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

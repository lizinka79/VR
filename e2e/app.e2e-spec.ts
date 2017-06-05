import { VrAppPage } from './app.po';

describe('vr-app App', () => {
  let page: VrAppPage;

  beforeEach(() => {
    page = new VrAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

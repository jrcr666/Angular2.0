import { JuanraAngularPage } from './app.po';

describe('juanra-angular App', function() {
  let page: JuanraAngularPage;

  beforeEach(() => {
    page = new JuanraAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

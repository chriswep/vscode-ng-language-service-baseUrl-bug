import { VscodeBaseUrlBugPage } from './app.po';

describe('vscode-base-url-bug App', () => {
  let page: VscodeBaseUrlBugPage;

  beforeEach(() => {
    page = new VscodeBaseUrlBugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

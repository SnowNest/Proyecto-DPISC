import { ProyectoDPISCPage } from './app.po';

describe('proyecto-dpisc App', () => {
  let page: ProyectoDPISCPage;

  beforeEach(() => {
    page = new ProyectoDPISCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

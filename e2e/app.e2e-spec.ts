import { Angular2reduxTodoPage } from './app.po';

describe('angular2redux-todo App', () => {
  let page: Angular2reduxTodoPage;

  beforeEach(() => {
    page = new Angular2reduxTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
